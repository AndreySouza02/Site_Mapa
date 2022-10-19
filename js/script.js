var map = L.map('mapInda').setView([-23.092128, -47.216663], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.09238, -47.214721]).addTo(map)
    .bindPopup('Augusto de Olveira Camargo: <a href="#" class="speciallink">Clique aqui</a>');


L.marker([-23.114746, -47.221695]).addTo(map)
    .bindPopup('Francisco de Paula Leite: <a href="#" class="speciallink">Clique aqui</a>');  
    
L.marker([-23.084272, -47.224538]).addTo(map)
    .bindPopup('Ruy Ohtake: <a href="#" class="speciallink">Clique aqui</a>');      

    //  function onMapClick(e) {
    //      alert("You clicked the map at " + e.latlng);
    //  }
    
    //  map.on('click', onMapClick);