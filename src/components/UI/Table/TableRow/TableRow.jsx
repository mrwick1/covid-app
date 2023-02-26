import React from 'react';
import { HospitalName, Select, Tr } from './TableRowStyle';

const TableRow = ({
  id,
  block_name,
  address,
  selectHospital,
  selectedHospital,
  item,
  center_id,
}) => {
  return (
    <Tr selected={selectedHospital?.center_id === center_id}>
      <td>{(id + 1).toString().padStart(2, '0')}</td>
      <HospitalName>
        <span>{block_name}</span>
        <p>{address}</p>
      </HospitalName>
      <Select>
        <span
          onClick={() => {
            selectHospital(item);
          }}
        >
          {selectedHospital?.center_id === center_id ? 'Selected' : 'Select'}
        </span>
      </Select>
    </Tr>
  );
};

export default TableRow;
