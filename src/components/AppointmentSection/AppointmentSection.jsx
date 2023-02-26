import React, { useEffect, useState } from 'react';
import { Label, Next, Title } from '../IdSection/IdsectionStyle';
import StatusCard from '../UI/StatusCard/StatusCard';
import TitleBanner from '../UI/TitleBanner/TitleBanner';
import swal from 'sweetalert';
import {
  AppointmentContainer,
  AppointmentFlex,
  BoothDiv,
  FlexCol,
  HospitalAddress,
  HospitalName,
  NameFlex,
  Number,
  PersonalDetals,
  SelectFlex,
  SelectSlot,
  Vaccine,
} from './AppointmentSectionStyle';

const AppointmentSection = ({
  myRef,
  block_name,
  address,
  sessions,
  booked,
  confirmBooking,
  executeScroll,
  center_id,
}) => {
  const [selectedSlot, setSelectedSlot] = useState('');

  const slotChangeHandler = (e) => {
    setSelectedSlot(e.target.value);
  };

  useEffect(() => {
    executeScroll();
  }, []);

  useEffect(() => {
    setSelectedSlot('');
  }, [center_id]);
  return (
    <>
      <TitleBanner title='registration processing' />
      <StatusCard
        identification={true}
        vaccineCenter={true}
        appointment={true}
      />
      <AppointmentContainer>
        <Title ref={myRef}>Schedule an appointment</Title>
        <AppointmentFlex>
          <div>
            <NameFlex>
              <Number>01 .</Number>
              <FlexCol>
                <HospitalName>{block_name}</HospitalName>
                <HospitalAddress>{address}</HospitalAddress>
                <Vaccine>Covidshield</Vaccine>
              </FlexCol>
            </NameFlex>
            <hr />
            <PersonalDetals>
              <HospitalName>Febin Abraham</HospitalName>
              <HospitalAddress>Date of Birth</HospitalAddress>
              <HospitalAddress>03/02/1995</HospitalAddress>
            </PersonalDetals>
          </div>
          <SelectFlex>
            <div>
              <Label style={{ marginBottom: '10px' }} htmlFor='Booth'>
                Select vaccination booth
              </Label>
              <BoothDiv name='booth'>05</BoothDiv>
            </div>
            <div>
              <Label htmlFor='SLot' style={{ marginBottom: '10px' }}>
                Select time slot
              </Label>
              <SelectSlot
                name='slot'
                value={selectedSlot}
                onChange={slotChangeHandler}
              >
                <option value=''>
                  {!sessions ? 'No Slots Available' : 'Select Time Slot'}
                </option>
                {sessions &&
                  sessions[0].slots.map((el) => {
                    return <option value={el.time}>{el.time}</option>;
                  })}
              </SelectSlot>
            </div>
          </SelectFlex>
        </AppointmentFlex>
        <Next
          disabled={selectedSlot ? (booked ? true : false) : true}
          onClick={() => {
            confirmBooking(true);
            swal('Success!', 'You Booking is Successful!', 'success');
          }}
        >
          {booked ? 'Booking Confirmed' : 'Confirm Appointment'}
        </Next>
      </AppointmentContainer>
    </>
  );
};

export default AppointmentSection;
