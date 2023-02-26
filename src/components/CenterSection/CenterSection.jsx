import React, { useEffect, useMemo, useState } from 'react';
import { Next, Title } from '../IdSection/IdsectionStyle';
import StatusCard from '../UI/StatusCard/StatusCard';
import TitleBanner from '../UI/TitleBanner/TitleBanner';
import useFetchAPI from '../../hooks/useFetchAPI';
import {
  CardFlex,
  CenterContainer,
  DropdownFlex,
  Label,
  Search,
  Select,
  SelectContainer,
} from './CenterSectionStyle';
import axios from 'axios';
import OptionsCard from '../UI/OptionsCard/OptionsCard';
import Table from '../UI/Table/Table';

const CenterSection = ({
  myRef,
  executeScroll,
  onNext,
  selectHospital,
  selectedHospital,
  confirmBooking,
  scroll,
}) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [searchPincode, setSearchPincode] = useState('');
  const [selectedByPincode, setSelectedByPincode] = useState(false);
  const [options, setOptions] = useState([
    {
      id: '0',
      name: '18+',
      selected: true,
    },
    {
      id: '1',
      name: '45+',
      selected: false,
    },
    {
      id: '2',
      name: 'free',
      selected: true,
    },
    {
      id: '3',
      name: 'paid',
      selected: false,
    },
    {
      id: '4',
      name: 'first dose',
      selected: true,
    },
  ]);

  // toggle an option
  const selectOption = (id) => {
    const temp = options.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          selected: !el.selected,
        };
      } else {
        return el;
      }
    });
    setOptions(temp);
  };

  // get states
  const {
    data: statesData,
    loading,
    error,
  } = useFetchAPI('admin/location/states');

  // get districts
  const {
    data: districts,
    loading2,
    error2,
  } = useFetchAPI(`admin/location/districts/${selectedState}`);

  // get centers

  const {
    data: centersData,
    loading3,
    error3,
  } = useFetchAPI(
    `appointment/sessions/public/calendarByDistrict?district_id=${selectedDistrict}&date=${new Date()
      .toLocaleDateString('en-GB')
      .replaceAll('/', '-')}`
  );

  // get by pincode
  const {
    data: pincodeData,
    loading4,
    error4,
  } = useFetchAPI(
    `appointment/sessions/public/findByPin?pincode=${searchPincode}&date=${new Date()
      .toLocaleDateString('en-GB')
      .replaceAll('/', '-')}`
  );

  const searchByPincode = () => {
    setSelectedByPincode(true);
    setSearchPincode(pincode);
    setSelectedState('');
    setSelectedDistrict(1);
    confirmBooking(false);
    selectHospital(null);
    onNext({ appointment: false });
  };

  // to scroll
  useEffect(() => {
    executeScroll();
  }, []);

  // select state
  const stateOnChange = (id) => {
    setSelectedState(id);
    setSelectedDistrict(1);
    onNext({ appointment: false });
    confirmBooking(false);
    selectHospital(null);
  };

  // select district

  const districtOnChange = (id) => {
    setSelectedByPincode(false);
    setSelectedDistrict(id);
    selectHospital(null);
    setPincode('');
  };

  // submit on enter
  function onSubmit(event) {
    if (event.key === 'Enter') {
      searchByPincode();
    }
  }

  // table headers

  const tableHeaders = useMemo(() => {
    return [
      {
        id: 1,
        name: 'No',
      },
      {
        id: 2,
        name: 'Name',
      },
      {
        id: 3,
        name: 'Action',
      },
    ];
  });
  return (
    <>
      <TitleBanner title='registration processing' />
      <StatusCard identification={true} vaccineCenter={true} />
      <CenterContainer>
        <Title ref={myRef}>Choose Vaccine Center</Title>
        <DropdownFlex>
          <SelectContainer>
            <Label htmlFor='state'>State</Label>
            <Select
              name='state'
              onChange={(e) => stateOnChange(e.target.value)}
              value={selectedState}
            >
              <option value=''>Select</option>
              {statesData?.states.map((el) => (
                <option value={el.state_id}>{el.state_name}</option>
              ))}
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Label htmlFor='district'>District</Label>
            <Select
              disabled={selectedState === ''}
              name='district'
              onChange={(e) => districtOnChange(e.target.value)}
              value={selectedDistrict}
            >
              <option value=''>Select</option>
              {districts?.districts.map((el) => (
                <option value={el.district_id}>{el.district_name}</option>
              ))}
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Label htmlFor='pincode'>Pincode</Label>
            <Search>
              <input
                type='text'
                onChange={(e) => setPincode(e.target.value)}
                onKeyDown={onSubmit}
                value={pincode}
              />
              <img
                onClick={searchByPincode}
                src='/assets/images/search.svg'
                alt=''
              />
            </Search>
          </SelectContainer>
        </DropdownFlex>
        <CardFlex>
          {options.map((el) => {
            return <OptionsCard selectOption={selectOption} {...el} />;
          })}
        </CardFlex>
        <Table
          tableHeaders={tableHeaders}
          data={
            selectedByPincode ? pincodeData?.sessions : centersData?.centers
          }
          selectHospital={selectHospital}
          selectedHospital={selectedHospital}
        />
        <Next
          disabled={selectedHospital ? false : true}
          onClick={() => {
            scroll();
            onNext({ appointment: true });
          }}
        >
          Next
        </Next>
      </CenterContainer>
    </>
  );
};

export default CenterSection;
