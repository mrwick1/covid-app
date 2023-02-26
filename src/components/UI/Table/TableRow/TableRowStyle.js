import styled from 'styled-components';
import { colors } from '../../../../consts/theme';

export const HospitalName = styled.td`
  span {
    display: block;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const Tr = styled.tr`
  color: ${(props) => (props.selected ? colors.blue : colors.gray)};
  td {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Select = styled.td`
  span {
    cursor: pointer;
    display: block;
    width: 88px;
  }
`;
