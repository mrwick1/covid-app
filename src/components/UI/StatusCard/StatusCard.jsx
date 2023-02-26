import React from 'react';
import Status from '../Status/Status';
import { Card } from './StatusCardStyle';

const StatusCard = ({ identification, vaccineCenter, appointment }) => {
  return (
    <Card>
      <Status text="Identification" status={identification} />
      <Status text="Vaccine Center" status={vaccineCenter} />
      <Status text="Appointment" status={appointment} />
    </Card>
  );
};

export default StatusCard;
