import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const AppointmentContainer = styled.div`
  padding: 70px 0;
  max-width: 1200px;
  margin: auto;
`;
export const AppointmentFlex = styled.div`
  display: flex;
  color: ${colors.gray};
  align-items: start;
  padding-bottom: 50px;
  hr {
    border-color: ${colors.lightestGray};
    opacity: 0.4;
  }
`;

export const NameFlex = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding-bottom: 40px;
  padding-right: 100px;
`;
export const Number = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
export const HospitalName = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export const HospitalAddress = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Vaccine = styled.span`
  margin-top: 30px;
  display: block;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export const SelectFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const BoothDiv = styled.div`
  width: 298px;
  height: 50px;
  border: 1px solid ${colors.gray};
  padding: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border-radius: 15px;
`;

export const SelectSlot = styled.select`
  width: 298px;
  height: 50px;
  border: 1px solid ${colors.gray};
  padding: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border-radius: 15px;
  color: ${colors.gray};
  outline: none;
  option {
    font-weight: 500;
    color: ${colors.gray};
    font-size: 18px;
    line-height: 22px;
  }
`;

export const PersonalDetals = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  padding-top: 40px;
  gap: 10px;
`;
