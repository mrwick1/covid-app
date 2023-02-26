import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const CenterContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 150px;
  max-width: 1060px;
  margin: auto;
`;

export const DropdownFlex = styled.div`
  display: flex;
  gap: 80px;
  max-width: 1060px;
  margin: auto;
`;
export const Select = styled.select`
  padding: 15px;
  border: 1px solid ${colors.gray};
  width: 100%;
  border-radius: 15px;
  outline: none;
  margin-top: 14px;
  color: ${colors.gray};
  background-color: ${colors.white};
  option {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 5px 10px;
    color: ${colors.gray};
  }
`;

export const SelectContainer = styled.div`
  width: 300px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.blue};
`;

export const Search = styled.div`
  position: relative;
  border: 1px solid ${colors.gray};
  width: 100%;
  border-radius: 15px;
  margin-top: 14px;
  input {
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 12px 35px 15px 15px;
    color: ${colors.gray};
    background-color: transparent;
  }
  img {
    position: absolute;
    right: 11px;
    top: 14px;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;

export const CardFlex = styled.div`
  display: flex;
  margin: auto;
  max-width: 1060px;
  padding: 70px 0 90px;
  justify-content: space-between;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: ${colors.gray};
  cursor: pointer;
`;
