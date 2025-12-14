const map = L.map('map', {
  zoomControl: false
}).setView([51.5074, -0.1278], 12);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png')
  .addTo(map);

fetch('./london_tube_schematic.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: feature => ({
        color: feature.properties.color || "#000",
        weight: 6,
        lineCap: "round"
      })
    }).addTo(map);
  });
