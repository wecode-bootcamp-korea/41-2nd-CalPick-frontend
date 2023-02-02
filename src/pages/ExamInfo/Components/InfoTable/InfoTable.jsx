import React from 'react';
import TablaList from './Components/TableList/TablaList';
import * as S from './InfoTable.styles';

export default function InfoTable({
  districts,
  testSites,
  examData,
  selectedData,
  setSelectedData,
  setCheckRdoId,
  districtsData,
  testSitesData,
}) {
  const selectHandler = (e, titleData) => {
    const isRadioChecked = e.target.checked;
    isRadioChecked && setCheckRdoId(e.target.id);

    setSelectedData({
      ...selectedData,
      [e.target.name]: e.target.value,
      testSiteId: e.target.id,
    });

    titleData === '시험일' && districtsData(e.target.value);
    titleData === '서울' && testSitesData(e.target.value);
  };

  return (
    <>
      <S.SelectExam
        name="examName"
        value={selectedData.examName || '캘픽'}
        onChange={selectHandler}
      >
        {EXAM_TITLE.map(list => {
          return (
            <S.SelectExamTitle key={list.id} value={list.examName}>
              {list.examName}
            </S.SelectExamTitle>
          );
        })}
      </S.SelectExam>
      <S.TableLayout>
        {TITLE_LIST.map(list => {
          return (
            <S.ContentLayout key={list.id}>
              <S.TableTitle>{list.title}</S.TableTitle>
              <TablaList
                title={list.title}
                districts={districts}
                examData={examData}
                testSites={testSites}
                selectHandler={selectHandler}
              />
            </S.ContentLayout>
          );
        })}
      </S.TableLayout>
    </>
  );
}

const TITLE_LIST = [
  {
    id: 1,
    title: '시험일',
  },
  {
    id: 2,
    title: '서울',
  },
  {
    id: 3,
    title: '고사장',
  },
];

const EXAM_TITLE = [
  {
    id: 1,
    examName: '캘픽',
  },
  {
    id: 2,
    examName: '캘픽스피킹',
  },
  {
    id: 3,
    examName: '오캘픽',
  },
  {
    id: 4,
    examName: '캘픽스',
  },
];
