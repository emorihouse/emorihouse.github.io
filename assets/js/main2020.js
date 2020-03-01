var map;
var markers = [];
var infoBalloons = [];
var markerData = [
  {
    name: '基準地点',
    icon: '',
    lat: 36.234672,
    lng: 137.969558
  },
  {
    name: 'エモリハウス',
    icon: './assets/images/marker_emorihouse.png',
    lat: 36.238292,
    lng: 137.964377
  },
  {
    name: "まつもと市民芸術館",
    icon: './assets/images/marker_rubykaigi.png',
    lat: 36.231132,
    lng: 137.974579
  }
];

function initMap() {
  // 地図の作成
  var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']});
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: mapLatLng,
    zoom: 16
  });

  // マーカー毎の処理
  for (var i = 0; i < markerData.length; i++) {
    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']});

    var icon_image = {
      url : markerData[i]['icon'],
      scaledSize : new google.maps.Size(64, 64)
    };

    markers[i] = new google.maps.Marker({
      position: markerLatLng,
      map: map,
      icon: icon_image
    });

    // 吹き出しの追加
    infoBalloons[i] = new google.maps.InfoWindow({
      content: '<div class="marker">' + markerData[i]['name'] + '</div>'
    });

    markerEvent(i);
  }
}

function markerEvent(i) {
  markers[i].addListener('click', function() {
    infoBalloons[i].open(map, markers[i]);
  });
}
