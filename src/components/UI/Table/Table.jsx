import React from 'react';
import TableRow from './TableRow/TableRow';
import { Empty, TableLayout } from './TableStyle';

const Table = ({
  tableHeaders,
  data = [],
  selectHospital,
  selectedHospital,
}) => {
  console.log(data);
  return (
    <TableLayout>
      <thead>
        <tr>
          {tableHeaders.map((el) => (
            <th>{el.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length !== 0 ? (
          data.map((item, id) => {
            return (
              <TableRow
                id={id}
                item={item}
                {...item}
                key={item.center_id}
                selectHospital={selectHospital}
                selectedHospital={selectedHospital}
              />
            );
          })
        ) : (
          <Empty>No Centers Found</Empty>
        )}
      </tbody>
    </TableLayout>
  );
};

export default Table;
