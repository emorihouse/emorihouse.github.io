var map;
var markers = [];
var infoBalloons = [];
var markerData = [
  {
    name: 'ミンカハウス',
    icon: './assets/images/emorihouse_marker.png',
    lat: 36.23101853145826, 
    lng: 137.97236777853885
  }, {
    name: "まつもと市民芸術館",
    icon: './assets/images/marker_rubykaigi.png',
    lat: 36.2300632891256, 
    lng: 137.97470463803973
  }
];

function initMap() {
  // 地図の作成
  var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']});
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: mapLatLng,
    zoom: 15
  });

  // マーカー毎の処理
  for (var i = 0; i < markerData.length; i++) {
    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']});

    var icon_image = {
      url : markerData[i]['icon'],
      scaledSize : new google.maps.Size(50, 80)
    };

    markers[i] = new google.maps.Marker({
      position: markerLatLng,
      map: map,
      icon: icon_image
    });

    infoBalloons[i] = new google.maps.InfoWindow({ // 吹き出しの追加
      content: '<div class="map-canvas">' + markerData[i]['name'] + '</div>'
    });

    markerEvent(i);
  }
}

function markerEvent(i) {
  markers[i].addListener('click', function() {
    infoBalloons[i].open(map, markers[i]);
  });
}
