import React, { useMemo, useState } from 'react';
import StatusCard from '../../components/UI/StatusCard/StatusCard';
import TitleBanner from '../../components/UI/TitleBanner/TitleBanner';
import {
  IdentificationContainer,
  Input,
  InputContainer,
  Label,
  Next,
  OptionFlex,
  Title,
} from './IdsectionStyle';
import ID from '../UI/ID/ID';
const IdSection = ({ onNext, scroll }) => {
  const [selectedID, setSelectedID] = useState({
    id: 'adhar',
    name: 'Adhar Id',
  });

  const [idNumber, setIdNumber] = useState('');

  const Ids = useMemo(() => {
    return [
      {
        id: 'adhar',
        name: 'Adhar Id',
      },
      {
        id: 'student',
        name: 'Student Id',
      },
      {
        id: 'passport',
        name: 'Passport ',
      },
      {
        id: 'birthcertificate',
        name: 'Birth Certificate',
      },
    ];
  }, []);

  const setId = (data) => {
    setSelectedID(data);
  };
  return (
    <>
      <TitleBanner title='registration' />
      <StatusCard identification={true} />
      {/* <Identification onNext={onNext} /> */}
      <IdentificationContainer>
        <Title>Select Identification type</Title>
        <OptionFlex>
          {Ids.map((el) => {
            return (
              <ID key={el.id} el={el} onClick={setId} selectedID={selectedID} />
            );
          })}
        </OptionFlex>
        <InputContainer>
          <Label htmlFor='idNumber'>{`Enter your ${selectedID.name} No`}</Label>
          <Input
            name='idNumber'
            onChange={(e) => setIdNumber(e.target.value)}
          />
          <Next
            disabled={idNumber.length === 0}
            onClick={() => {
              scroll();
              onNext({ center: true });
            }}
          >
            Next
          </Next>
        </InputContainer>
      </IdentificationContainer>
    </>
  );
};

export default IdSection;
