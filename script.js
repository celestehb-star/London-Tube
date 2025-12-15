mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsZXN0ZWhiIiwiYSI6ImNtaDlyN2F2dDFmZXQybG9hamx3cWwyM2sifQ.sDmtrL-2Urw1QrRbdyAEyg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/celestehb/cmj6eb5or001u01r7fmpxb829',
  center: [-0.1278, 51.5074],
  zoom: 10
});

map.on('load', () => {
  fetch('tube_lines.geojson')
    .then(response => response.json())
    .then(data => {
      map.addSource('tubeLines', {
        type: 'geojson',
        data: data
      });

      map.addLayer({
        id: 'tubeLinesLayer',
        type: 'line',
        source: 'tubeLines',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': ['get', 'color'],
          'line-width': 5
        }
      });
    })
    .catch(err => console.error('Error loading GeoJSON:', err));
});
