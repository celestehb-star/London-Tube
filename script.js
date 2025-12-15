mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsZXN0ZWhiIiwiYSI6ImNtaDlyN2F2dDFmZXQybG9hamx3cWwyM2sifQ.sDmtrL-2Urw1QrRbdyAEyg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/celestehb/cmj6eb5or001u01r7fmpxb829',
  center: [-0.1278, 51.5074], // London
  zoom: 10
});

map.on('load', () => {
  // Load your existing GeoJSON Tube lines
  fetch('tube_lines.geojson') // make sure this matches your file name
    .then(response => response.json())
    .then(data => {
      // Add the GeoJSON as a source
      map.addSource('tubeLines', {
        type: 'geojson',
        data: data
      });

      // Draw the lines on the map
      map.addLayer({
        id: 'tubeLinesLayer',
        type: 'line',
        source: 'tubeLines',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': ['get', 'color'], // uses color from GeoJSON property
          'line-width': 5
        }
      });
    })
    .catch(err => console.error('Error loading GeoJSON:', err));
});
