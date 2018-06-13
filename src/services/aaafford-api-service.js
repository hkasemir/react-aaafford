const API_URL = 'http://localhost:1337';
async function get(path) {
  const result = await fetch(API_URL + path);
  const json = await result.json();
  return json;
}
export function fetchRates() {
  return get('/rates');
}
