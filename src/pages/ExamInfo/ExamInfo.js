import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InfoTable from './Components/InfoTable/InfoTable';
import MapInfo from './Components/MapInfo/MapInfo';
import SelectedInfo from './Components/SelectedInfo/SelectedInfo';
import * as S from './ExamInfo.styles';

export default function ExamInfo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const examNameParams = searchParams.get('examName');
  const testDateParams = searchParams.get('testDate');

  const [checkRdoId, setCheckRdoId] = useState('');
  const [examData, setExamData] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [testSites, setTestSites] = useState([]);
  const [selectedData, setSelectedData] = useState({
    examName: examNameParams || '캘픽',
    testDate: testDateParams || '시험일을 선택해주세요',
    districts: '지역구를 선택해주세요',
    name: '시험 고사장을 선택해주세요',
    address: '고사장 선택시 주소가 보여집니다',
    testSiteId: 0,
  });
  const baseUrl = 'http://10.58.52.241:3001/';

  useEffect(() => {
    fetch(`${baseUrl}tests?testName=${selectedData.examName}`)
      .then(res => res.json())
      .then(res => {
        setExamData(res);
      });
  }, []);

  const districtsData = date => {
    fetch(
      `${baseUrl}tests?testName=${selectedData.examName}&testDate=${date}&provinceName=서울`
    )
      .then(res => res.json())
      .then(res => setDistricts(res[0].districts));
  };

  const testSitesData = districtName => {
    fetch(
      `${baseUrl}tests?testName=${selectedData.examName}&testDate=${selectedData.testDate}&provinceName=서울&districtName=${districtName}`
    )
      .then(res => res.json())
      .then(res => {
        setExamData(res);
        setTestSites(res[0].testSites);
      });
  };

  return (
    <S.examInfoContainer className="inner">
      <InfoTable
        districts={districts}
        testSites={testSites}
        examData={examData}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        setCheckRdoId={setCheckRdoId}
        districtsData={districtsData}
        testSitesData={testSitesData}
      />
      <SelectedInfo selectedData={selectedData} />
      <MapInfo selectedData={selectedData} testSites={testSites} />
    </S.examInfoContainer>
  );
}
