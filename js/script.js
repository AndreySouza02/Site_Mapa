var map = L.map('mapInda').setView([-23.092128, -47.216663], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.09238, -47.214721]).addTo(map)
    .bindPopup('Augusto de Olveira Camargo: <a href="http://historiadeindaiatuba.blogspot.com/2020/05/1-curiosidade-sobre-historia-de.html" class="speciallink">Clique aqui</a>');


L.marker([-23.093747, -47.214603]).addTo(map)
    .bindPopup('Francisco de Paula Leite: <a href="http://historiadeindaiatuba.blogspot.com/2020/07/os-segredos-dos-tumulos-ecleticos-de.html" class="speciallink">Clique aqui</a>');  
    
    

    // function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    // }
    
    // map.on('click', onMapClick);