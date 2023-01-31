import styled from 'styled-components';

export const SelectSeatContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 82% 8%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    'a board b'
    'windows seats door';
  ${props => props.theme.variables.wh('100%', '55vh')}
  background-color: white;
  border-radius: 5px;
`;

export const SeatInfo = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  ${props => props.theme.variables.wh('70%', '20%')};
  padding: 0 5px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.m};
`;

export const ChalkBoard = styled(SeatInfo)`
  grid-area: board;
  ${props => props.theme.variables.wh('40%', '60%')}
  margin-top: 10px;
  margin-left: 30%;
`;

export const Windows = styled.div`
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')}
  grid-area: windows;
  padding-left: 1px;
`;

export const Door = styled(SeatInfo)`
  grid-area: door;
  margin-top: 80%;
`;

export const Seats = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 15px;
  grid-area: seats;
  margin: 30px;
`;

export const Seat = styled.div`
  color: ${props =>
    props.isbooked ? props.theme.colors.primary : props.theme.colors.basic};
`;
