import React from 'react';
import * as S from './MapInfo.styles';
import Button from '../../../../components/Button';
import MapContainer from './Components/MapContainer';
import { useNavigate } from 'react-router-dom';

export default function MainInfo({ testSites, selectedData, coordinate }) {
  const navigate = useNavigate();
  const { examName, testDate, districts, testSiteId } = selectedData;
  const TITLE_LIST = [
    {
      id: 1,
      title: '시험명',
      content: selectedData.examName,
    },
    ,
    {
      id: 2,
      title: '서울',
      content: selectedData.districts,
    },
    {
      id: 3,
      title: '고사장',
      content: selectedData.name,
    },
    {
      id: 4,
      title: '주소',
      content: testSites.map(list => {
        return <>{selectedData.name === list.name && list.address}</>;
      }),
    },
  ];

  const clickHandler = () => {
    navigate(
      `/selected?testName=${examName}&testDate=${testDate}&provinceName=서울&districtName=${districts}&testSiteId=${testSiteId}`
    );
  };

  return (
    <S.MapInfoLayout>
      <MapContainer
        selectedData={selectedData}
        testSites={testSites}
        coordinate={coordinate}
      />
      <S.selectedInfo>
        {TITLE_LIST.map(list => {
          return (
            <S.SelectedWrap key={list.id}>
              <S.SelectedTitle>{list.title}</S.SelectedTitle>
              <S.SelectedContent>{list.content}</S.SelectedContent>
            </S.SelectedWrap>
          );
        })}
      </S.selectedInfo>

      <S.ButtonContainer>
        <Button color="primary" size="large" onClick={clickHandler}>
          좌석 선택하기
        </Button>
      </S.ButtonContainer>
    </S.MapInfoLayout>
  );
}
