var map;
var markers = [];
var infoBalloons = [];
var markerData = [
  {
    name: "愛媛県県民文化会館",
    icon: './assets/images/marker_rubykaigi.png',
    lat: 33.8485025,
    lng: 132.7798137,
  }, {
    name: 'エモリハウス',
    icon: './assets/images/marker_emorihouse.png',
    lat: 33.83968,
    lng: 132.77067,
  }
];

function initMap() {
  // 地図の作成
  var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']});
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: mapLatLng,
    zoom: 15,
  });

  // マーカー毎の処理
  for (var i = 0; i < markerData.length; i++) {
    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']});

    var icon_image = {
      url : markerData[i]['icon'],
      scaledSize : new google.maps.Size(50, 50)
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
