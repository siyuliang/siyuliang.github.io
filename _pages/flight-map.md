---
layout: archive
title: "Flight Map"
permalink: /flight-map/
author_profile: true
---

{% include base_path %}

<div style="margin-bottom: 20px;">
  <p>This is a map of the flights I've taken over the years.</p>
</div>

<div style="position: relative;">
  <div id="globeViz" style="height: 600px; width: 100%; background: #ffffff;"></div>
  <div style="position: absolute; bottom: 10px; right: 10px; font-size: 12px; color: #666; background-color: rgba(255, 255, 255, 0.7); padding: 5px; border-radius: 3px;">
    Data: <a href="https://ourairports.com/data/" target="_blank">OurAirports</a> | 
    Visualization: <a href="https://github.com/vasturiano/globe.gl" target="_blank">Globe.gl</a>
  </div>
</div>

<!-- Globe.gl and Papa Parse -->
<script src="//unpkg.com/globe.gl"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<script>
const elem = document.getElementById('globeViz');
const globe = Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .width(elem.offsetWidth)
  .height(600)
  .atmosphereColor('lightskyblue')
  .atmosphereAltitude(0.25)
  .arcColor('color')
  .arcDashLength(0.4)
  .arcDashGap(0.2)
  .arcDashAnimateTime(8000)
  .arcStroke(0.5)
  .arcsTransitionDuration(1000)
  .arcCurveResolution(500)
  .arcAltitude(0.4)        // Increased from 0.1 to 0.4
  .arcAltitudeAutoScale(0.5)  // Add this to automatically scale altitude based on distance
  .arcLabel('label')
  .pointColor('color')
  .pointAltitude(0.001)
  .pointRadius('size')
  .pointLabel(d => d.code)  // Changed to use a function that only returns the code
  .pointsMerge(true)
  .arcAltitude(0.1)
  (elem);

// Initialize empty airports object and arcs data
const airports = {};
let arcsData = [];

// Load airports data first, then flights
Promise.all([
  fetch('/assets/files/airports.csv').then(response => response.text()),
  fetch('/assets/files/flights.csv').then(response => response.text())
])
.then(([airportsData, flightsData]) => {
  // Parse airports
  Papa.parse(airportsData, {
    header: false, // Changed to false since the new CSV doesn't have headers
    complete: function(airportsResults) {
      airportsResults.data.forEach(airport => {
        // New CSV format: columns [4] = IATA code, [6] = lat, [7] = lon
        if (airport[4] && airport[6] && airport[7]) {
          airports[airport[4]] = {
            lat: parseFloat(airport[6]),
            lng: parseFloat(airport[7])
          };
        }
      });

      // Parse flights
      Papa.parse(flightsData, {
        header: true,
        complete: function(flightsResults) {
          const uniqueAirports = new Set();
          
          // Process flights data
          arcsData = flightsResults.data
            .filter(flight => flight.From && flight.To && airports[flight.From] && airports[flight.To])
            .map(flight => ({
              startLat: airports[flight.From].lat,
              startLng: airports[flight.From].lng,
              endLat: airports[flight.To].lat,
              endLng: airports[flight.To].lng,
              color: '#2874A6',
              label: `${flight.From} → ${flight.To}${flight.Flight ? '\n' + flight.Flight : ''}`  // Modified this line
            }));

          // Collect unique airports
          flightsResults.data.forEach(flight => {
            if (flight.From && airports[flight.From]) uniqueAirports.add(flight.From);
            if (flight.To && airports[flight.To]) uniqueAirports.add(flight.To);
          });

          // Convert unique airports to points data
          const pointsData = Array.from(uniqueAirports)
            .map(code => ({
              lat: airports[code].lat,
              lng: airports[code].lng,
              size: 0.3,
              color: '#e74c3c',
              code   // Using shorthand property since key and value are the same
            }));

          // Update globe with data
          globe
            .arcsData(arcsData)
            .pointsData(pointsData);

          // Adjust lighting
          const directionalLight = globe.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
          if (directionalLight) {
            directionalLight.intensity = 2.5;
          }

          // Set initial view
          globe.pointOfView({ lat: 30, lng: 100, altitude: 2.5 });

          // Auto-rotate
          globe.controls().autoRotate = true;
          globe.controls().autoRotateSpeed = 0.1;  // Reduced from 0.5 to 0.2 for slower rotation
        }
      });
    }
  });
});
</script>