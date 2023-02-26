import styled from 'styled-components';
import { colors } from '../../../consts/theme';

export const TableLayout = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  border-spacing: 0px;
  margin-bottom: 80px;
  thead tr th {
    background-color: ${colors.lightGray};
  }
  thead th:first-child {
    border-radius: 15px 0 0 15px;
  }
  thead th:last-child {
    border-radius: 0 15px 15px 0;
  }
  th {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 10px 15px;
    color: ${colors.gray};
    text-align: left;
  }
  td {
    padding: 10px 15px;
  }
  tbody {
    background: #ffffff;
    border-left: 40px solid white;
    border-right: 40px solid white;
    box-shadow: -6px 8px 17px 1px rgba(0, 0, 0, 0.11);
    border-radius: 24px;
    padding: 20px;
    tr:not(:last-child) {
      border-bottom: 1px solid ${colors.lightestGray};
    }
    td {
      padding: 20px 15px;
    }
  }
`;

export const Empty = styled.tr`
  padding: 2rem;
  display: block;
`;
