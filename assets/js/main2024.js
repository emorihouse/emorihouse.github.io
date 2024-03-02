var map;
var markers = [];
var infoBalloons = [];
var markerData = [
  {
    name: "那覇文化芸術劇場なはーと",
    icon: './assets/images/marker_rubykaigi.png',
    lat: 26.216331,
    lng: 127.682844
  }, {
    name: 'エモリハウス@FamilyRoomOkinawa',
    icon: './assets/images/marker_emorihouse.png',
    lat: 26.2180005,
    lng: 127.6834565
  }, {
    name: 'ヤダハウス@旅の宿シビランカ',
    icon: './assets/images/marker_yadahouse.png',
    lat: 26.2147761,
    lng: 127.6805593
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
