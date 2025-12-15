mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsZXN0ZWhiIiwiYSI6ImNtaDlyN2F2dDFmZXQybG9hamx3cWwyM2sifQ.sDmtrL-2Urw1QrRbdyAEyg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/celestehb/cmj6eb5or001u01r7fmpxb829',
  center: [-0.1278, 51.5074], // London
  zoom: 10
});