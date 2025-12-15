mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsZXN0ZWhiIiwiYSI6ImNtaDlyN2F2dDFmZXQybG9hamx3cWwyM2sifQ.sDmtrL-2Urw1QrRbdyAEyg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/celestehb/cmj6eb5or001u01r7fmpxb829',
  center: [-0.1278, 51.5074], // London
  zoom: 10
});

// Wait until map loads
map.on('load', () => {
  // Fetch your existing GeoJSON file
  fetch('tube_lines.geojson') // make sure the filename matches exactly
    .then(response => response.json())
    .then(data => {
      // Add the GeoJSON as a source
      map.addSource('tubeLines', { type: 'geojson', data: data });

      // Add a line layer to draw your Tube lines
      map.addLayer({
        id: 'tubeLinesLayer',
        type: 'line',
        source: 'tubeLines',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': ['get', 'color'], // assumes each feature has a "color" property
          'line-width': 5
        }
      });
    })
    .catch(err => console.error('Error loading GeoJSON:', err));
});
