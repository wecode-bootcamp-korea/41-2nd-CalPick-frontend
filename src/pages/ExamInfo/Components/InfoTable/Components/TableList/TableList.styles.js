import styled from 'styled-components';

export const InfoListContainer = styled.ul`
  display: ${props => props.isSeoul && 'flex'};
  flex-wrap: wrap;
  height: 350px;
  padding-top: 10px;
  overflow: scroll;
`;

export const InfoList = styled.li`
  ${({ theme }) => theme.variables.flex}
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: ${props => props.isSeoul && '47%'};
  margin: 0 5px 5px 5px;
  height: 60px;
  padding: 0 20px 0 10px;
  list-style: none;
  align-items: center;
  text-align: center;
`;

export const ListInput = styled.input`
  width: 0px;
  height: 0px;

  &:checked + label {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.basic};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
