ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [53.880921,27.493038],
            zoom: 17,
        }, {
            searchControlProvider: 'yandex#search'
        }),


        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Location',
            balloonContent: 'Location'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './assets/images/marker.png',
            iconImageSize: [32, 43],
            iconImageOffset: [-5, -38]
        });
    myMap.geoObjects
        .add(myPlacemark);
});