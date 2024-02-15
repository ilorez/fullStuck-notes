import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <label>Arrival Date:</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      <label>Departure Date:</label>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    </div>
  );
};

export default MyDatePickerComponent;
