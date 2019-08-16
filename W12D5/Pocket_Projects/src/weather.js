const pollWeather = (lat, lon) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

  const apiKey = 'f816d7f39052e3a98b21952097a43076';
  // This is our API key; please use your own!
  url += `&APPID=${apiKey}`;
