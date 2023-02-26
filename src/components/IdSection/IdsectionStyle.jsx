import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const Title = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${colors.gray};
  width: 100%;
  display: block;
  margin-bottom: 80px;
`;

export const IdentificationContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 150px;
`;

export const OptionFlex = styled.div`
  max-width: 842px;
  display: flex;
  row-gap: 160px;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 70px;
  margin: auto;
  padding-bottom: 90px;
`;

export const InputContainer = styled.div`
  max-width: 624px;
  margin: auto;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.gray};
  display: block;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.gray};
  width: 100%;
  height: 50px;
  border-radius: 15px;
  outline: none;
  border: 1px solid ${colors.darkGray};
  padding: 15px 20px;
`;

export const Next = styled.button`
  background-color: ${(props) =>
    props.disabled ? colors.paleBlue : colors.blue};
  color: ${colors.white};
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid ${colors.blue};
  border-radius: 15px;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  transition: all 0.3s ease;
  display: block;
  width: 624px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  :hover:enabled {
    color: ${colors.blue};
    background-color: transparent;
  }
`;
