ymaps.geocode("г.Москва, ул.Шоссейная, д.5").then(function (res) {
    var coord = res.geoObjects.get(0).geometry.getCoordinates();
    myMap.balloon.open(coord, "Содержимое балуна", {
        closeButton: false
    });
});