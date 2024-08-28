// Placeholder to host a component

import React from 'react';

const HoursComponent = () => {
  // Obtiene el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const today = new Date().getDay();

  // Definir las horas de apertura basadas en el día de la semana
  const openingHours = {
    weekdays: '10 a.m. - 4 p.m.',
    weekends: '9 a.m. - 8 p.m.',
  };

  // Determina si hoy es un día entre semana o fin de semana
  const isWeekend = today === 0 || today === 6;
  const hours = isWeekend ? openingHours.weekends : openingHours.weekdays;

  return (
    <div>
      <h2>Horario de apertura de hoy:</h2>
      <p>{hours}</p>
    </div>
  );
};

export default HoursComponent;