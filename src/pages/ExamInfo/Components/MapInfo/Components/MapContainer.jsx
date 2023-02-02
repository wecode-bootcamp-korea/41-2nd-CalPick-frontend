import React, { useEffect } from 'react';
import * as S from './MapContainer.styles';

export default function MapContainer({ selectedData, testSites, coordinate }) {
  let lngValue = testSites.find(data => {
    return selectedData.name === data.name;
  })?.lng;

  let latValue = testSites.find(data => {
    return selectedData.name === data.name;
  })?.lat;

  useEffect(() => {
    const { kakao } = window;

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lngValue, latValue),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);

    //마커 위치
    let markerPosition = new kakao.maps.LatLng(lngValue, latValue);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    //지도 타입
    let mapTypeControl = new kakao.maps.MapTypeControl();

    //지도 컨트롤
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, [lngValue, latValue]);

  return <S.PlaceMap id="map"></S.PlaceMap>;
}
