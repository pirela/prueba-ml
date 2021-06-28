import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const BreadCrumbContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  min-height: 20px;
  margin: 12px auto;
`;

export const CategoryName = styled.div`
  font-size: 14px;
  margin: 0 8px 0px 0px;
  cursor: pointer;
  color: #3483fa;
  ${({ next }) => next && `
    &::after {
      margin-left: 8px;
      content: ">";
      color: #afafaf;
    }  
  `}
`;