(() => {
  const cases = [
    {input: 'petitionerNoticeDate', output: 'petitionerNoticeResult', months: 1, label: 'Referencia de un mes desde la notificación al peticionario'},
    {input: 'reportTransmissionDate', output: 'reportTransmissionResult', months: 3, label: 'Referencia de tres meses desde la remisión del informe a los Estados'}
  ];
  const dateFormat = new Intl.DateTimeFormat('es-ES', {dateStyle: 'long', timeZone: 'UTC'});

  function addCalendarMonths(date, months) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + months;
    const target = new Date(Date.UTC(year, month, 1));
    const lastDay = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
    target.setUTCDate(Math.min(date.getUTCDate(), lastDay));
    return target;
  }

  cases.forEach(({input, output, months, label}) => {
    const dateInput = document.getElementById(input);
    const result = document.getElementById(output);
    if (!dateInput || !result) return;
    dateInput.addEventListener('input', () => {
      if (!dateInput.value) {
        result.textContent = `Elige una fecha para ver la referencia orientativa de ${months === 1 ? 'un mes' : 'tres meses'}.`;
        return;
      }
      const [year, month, day] = dateInput.value.split('-').map(Number);
      const start = new Date(Date.UTC(year, month - 1, day));
      if (start.getUTCFullYear() !== year || start.getUTCMonth() !== month - 1 || start.getUTCDate() !== day) {
        result.textContent = 'La fecha no es válida.';
        return;
      }
      result.textContent = `${label}: ${dateFormat.format(addCalendarMonths(start, months))}. Cálculo de calendario, solo orientativo.`;
    });
  });
})();
