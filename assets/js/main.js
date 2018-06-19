var map;
var marker;
var info_baloon;
var center = {
  lat: 33.6044276, // 緯度,
  lng: 130.4034843 // 経度
};
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: center,
    zoom: 16 // 地図のズームを指定
  });

  marker = new google.maps.Marker({
    position: center,
    map: map
  });

  info_baloon = new google.maps.InfoWindow({
    content: '<div class="map-canvas">RubyKaigi 2019 会場</div>'
  });

  marker.addListener('click', function() {
    info_baloon.open(map, marker);
  })
}
