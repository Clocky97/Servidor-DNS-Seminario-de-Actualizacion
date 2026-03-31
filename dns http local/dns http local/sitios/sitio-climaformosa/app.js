const latitude = -26.18;
const longitude = -58.18;

function weatherLabel(code) {
  const map = {
    0: "Despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Niebla",
    48: "Niebla con escarcha",
    51: "Llovizna leve",
    53: "Llovizna moderada",
    55: "Llovizna intensa",
    61: "Lluvia leve",
    63: "Lluvia moderada",
    65: "Lluvia intensa",
    71: "Nieve leve",
    80: "Chaparrones leves",
    81: "Chaparrones moderados",
    82: "Chaparrones fuertes",
    95: "Tormenta"
  };
  return map[code] || `Código ${code}`;
}

async function loadWeather() {
  const status = document.getElementById('status');
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m&forecast_days=1&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('No fue posible consultar la API');
    const data = await res.json();

    document.getElementById('temp').textContent = `${data.current.temperature_2m} °C · ${weatherLabel(data.current.weather_code)}`;
    document.getElementById('wind').textContent = `${data.current.wind_speed_10m} km/h`;
    document.getElementById('time').textContent = data.current.time.replace('T', ' ');
    status.textContent = 'Datos actualizados correctamente.';

    const forecast = document.getElementById('forecast');
    forecast.innerHTML = '';
    const hours = data.hourly.time.slice(0, 8);
    const temps = data.hourly.temperature_2m.slice(0, 8);

    hours.forEach((hour, index) => {
      const item = document.createElement('div');
      item.className = 'forecast-item';
      item.innerHTML = `<span>${hour.split('T')[1]}</span><strong>${temps[index]} °C</strong>`;
      forecast.appendChild(item);
    });
  } catch (error) {
    status.textContent = 'No se pudieron cargar los datos del clima.';
    console.error(error);
  }
}

loadWeather();
