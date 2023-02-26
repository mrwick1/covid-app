import React, { useRef, useState } from 'react';
import AppointmentSection from '../../components/AppointmentSection/AppointmentSection';
import Banner from '../../components/Banner/Banner';
import CenterSection from '../../components/CenterSection/CenterSection';
import IdSection from '../../components/IdSection/IdSection';

const Home = () => {
  const [activity, setActivity] = useState({
    center: false,
    appointment: false,
  });
  const [selectedHospital, setSelectedHospital] = useState();
  const [booked, setBooked] = useState(false);
  const centerRef = useRef(null);
  const appointmentRef = useRef(null);
  const executeScrollToCenter = () => centerRef?.current?.scrollIntoView();
  const executeScrollToAppointment = () =>
    appointmentRef?.current?.scrollIntoView();
  console.log(booked, 'akr');
  const onNext = (data) => {
    setActivity({
      ...activity,
      ...data,
    });
  };

  const scrollToCenter = () => {
    executeScrollToCenter();
  };
  const scrollToAppointment = () => {
    executeScrollToAppointment();
  };

  const selectHospital = (data) => {
    setSelectedHospital(data);
    setBooked(false);
  };

  const confirmBooking = (data) => {
    setBooked(data);
  };
  return (
    <div>
      <Banner />
      <IdSection onNext={onNext} scroll={scrollToCenter} />
      {activity.center && (
        <CenterSection
          myRef={centerRef}
          executeScroll={executeScrollToCenter}
          onNext={onNext}
          selectHospital={selectHospital}
          selectedHospital={selectedHospital}
          confirmBooking={confirmBooking}
          scroll={scrollToAppointment}
        />
      )}
      {activity.appointment && (
        <AppointmentSection
          {...selectedHospital}
          myRef={appointmentRef}
          booked={booked}
          executeScroll={executeScrollToAppointment}
          confirmBooking={confirmBooking}
        />
      )}
    </div>
  );
};

export default Home;
