"""Build the self-contained Americas SVG from Natural Earth 1:50m GeoJSON."""
from html import escape
from pathlib import Path
from urllib.request import urlopen
import json

SOURCE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson"
OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "mapa-americas.svg"
WIDTH, HEIGHT = 1000, 900
LON_MIN, LON_MAX = -175, -25
LAT_MIN, LAT_MAX = -58, 85

MEMBERS = {
    "ATG": "Antigua y Barbuda", "ARG": "Argentina", "BHS": "Bahamas", "BRB": "Barbados",
    "BLZ": "Belice", "BOL": "Bolivia", "BRA": "Brasil", "CAN": "Canadá", "CHL": "Chile",
    "COL": "Colombia", "CRI": "Costa Rica", "CUB": "Cuba", "DMA": "Dominica", "DOM": "República Dominicana",
    "ECU": "Ecuador", "SLV": "El Salvador", "USA": "Estados Unidos", "GRD": "Granada", "GTM": "Guatemala",
    "GUY": "Guyana", "HTI": "Haití", "HND": "Honduras", "JAM": "Jamaica", "MEX": "México",
    "PAN": "Panamá", "PRY": "Paraguay", "PER": "Perú", "KNA": "San Cristóbal y Nieves", "LCA": "Santa Lucía",
    "VCT": "San Vicente y las Granadinas", "SUR": "Surinam", "TTO": "Trinidad y Tobago", "URY": "Uruguay", "VEN": "Venezuela",
}
FORMER = {"NIC": "Nicaragua"}
SMALL_ISLAND_CENTROIDS = {
    "ATG": (-61.8, 17.06), "BRB": (-59.54, 13.19), "DMA": (-61.37, 15.41), "GRD": (-61.68, 12.12),
    "KNA": (-62.78, 17.36), "LCA": (-60.98, 13.91), "VCT": (-61.2, 13.25),
}
SPANISH_NAMES = {
    "United States of America": "Estados Unidos", "The Bahamas": "Bahamas", "Dominican Republic": "República Dominicana",
    "Saint Vincent and the Grenadines": "San Vicente y las Granadinas", "Saint Lucia": "Santa Lucía",
    "Saint Kitts and Nevis": "San Cristóbal y Nieves", "Grenada": "Granada", "Antigua and Barbuda": "Antigua y Barbuda",
    "Trinidad and Tobago": "Trinidad y Tobago", "Falkland Islands": "Islas Malvinas", "Puerto Rico": "Puerto Rico",
    "Greenland": "Groenlandia", "French Guiana": "Guayana Francesa", "Aruba": "Aruba", "Curaçao": "Curazao",
    "Caribbean Netherlands": "Caribe Neerlandés", "Turks and Caicos Islands": "Islas Turcas y Caicos",
    "British Virgin Islands": "Islas Vírgenes Británicas", "United States Virgin Islands": "Islas Vírgenes de EE. UU.",
    "Cayman Islands": "Islas Caimán", "Montserrat": "Montserrat", "Anguilla": "Anguila", "Guadeloupe": "Guadalupe",
    "Martinique": "Martinica", "Saint Martin": "San Martín", "Sint Maarten": "Sint Maarten", "Bermuda": "Bermudas",
    "South Georgia and the South Sandwich Islands": "Georgia del Sur e Islas Sandwich del Sur",
}

def project(point):
    lon, lat = point[:2]
    x = (lon - LON_MIN) * WIDTH / (LON_MAX - LON_MIN)
    y = (LAT_MAX - lat) * HEIGHT / (LAT_MAX - LAT_MIN)
    return round(x, 1), round(y, 1)

def path_for_ring(ring):
    points = [project(point) for point in ring if LON_MIN <= point[0] <= LON_MAX and LAT_MIN <= point[1] <= LAT_MAX]
    if len(points) < 3:
        return ""
    return "M" + "L".join(f"{x} {y}" for x, y in points) + "Z"

def path_for_geometry(geometry):
    if geometry["type"] == "Polygon":
        rings = geometry["coordinates"]
    elif geometry["type"] == "MultiPolygon":
        rings = [ring for polygon in geometry["coordinates"] for ring in polygon]
    else:
        return ""
    return "".join(path_for_ring(ring) for ring in rings)

def main():
    with urlopen(SOURCE, timeout=30) as response:
        world = json.load(response)
    paths = []
    found = set()
    for feature in world["features"]:
        props = feature["properties"]
        code = props.get("ADM0_A3") or props.get("ISO_A3")
        if not code:
            continue
        raw_name = props.get("ADMIN", "")
        name = MEMBERS.get(code) or FORMER.get(code) or SPANISH_NAMES.get(raw_name, raw_name)
        status = "member" if code in MEMBERS else "former" if code in FORMER else "other"
        path = path_for_geometry(feature["geometry"])
        if not path:
            continue
        if code in MEMBERS or code in FORMER:
            found.add(code)
        paths.append(f'<path d="{path}" data-code="{escape(code)}" data-name="{escape(name)}" data-status="{status}" aria-label="{escape(name)}" tabindex="0" role="button"/>')
    missing = set(MEMBERS) - found - set(SMALL_ISLAND_CENTROIDS)
    if missing:
        raise SystemExit(f"Natural Earth map is missing OAS members: {sorted(missing)}")
    markers = []
    for code, point in SMALL_ISLAND_CENTROIDS.items():
        x, y = project(point)
        markers.append(f'<circle cx="{x}" cy="{y}" r="7" data-code="{code}" data-name="{escape(MEMBERS[code])}" data-status="member" aria-label="{escape(MEMBERS[code])}" tabindex="0" role="button"/>')
    svg = '\n'.join([
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 900" role="group" aria-label="Mapa interactivo de los Estados de las Américas">',
        '<g class="oas-map-land">', *paths, *markers, '</g>', '</svg>',
    ])
    OUTPUT.write_text(svg, encoding="utf-8")
    print(f"Wrote {OUTPUT.name}: {len(paths)} country paths, {len(MEMBERS)} members, {len(FORMER)} former members, {OUTPUT.stat().st_size} bytes")

if __name__ == "__main__":
    main()
