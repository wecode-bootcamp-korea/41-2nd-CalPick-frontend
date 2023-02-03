import styled from 'styled-components';

export const SelectFormContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')};
  width: ${props => props.w};
  height: 100%;
  background-color: ${props => props.theme.colors.control};
  border-radius: 5px;
`;

export const Title = styled.p`
  padding-bottom: 10px;
  border-bottom: 3px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title2};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const SelectContents = styled.form`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  gap: 10px;
  position: relative;
`;
