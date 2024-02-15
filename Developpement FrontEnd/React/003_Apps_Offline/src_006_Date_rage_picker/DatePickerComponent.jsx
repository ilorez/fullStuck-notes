import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

const DatePickerComponent = () => {
  const arrivalDateInputRef = useRef(null);
  const departureDateInputRef = useRef(null);
  const datePickerContainerRef = useRef(null);

  useEffect(() => {
    const arrivalDateInput = arrivalDateInputRef.current;
    const departureDateInput = departureDateInputRef.current;
    const datePickerContainer = datePickerContainerRef.current;

    const picker = new Pikaday({
      field: arrivalDateInput,
      format: 'MM/DD/YYYY',
      onSelect: function () {
        departureDateInput.removeAttribute('disabled');
        picker.setMinDate(new Date());
      },
    });

    const departurePicker = new Pikaday({
      field: departureDateInput,
      format: 'MM/DD/YYYY',
      onSelect: function () {
        // Handle date range selection here
      },
    });

    arrivalDateInput.addEventListener('focus', function () {
      picker.show();
    });

    departureDateInput.addEventListener('focus', function () {
      departurePicker.show();
    });

    return () => {
      picker.destroy();
      departurePicker.destroy();
    };
  }, []);

  return (
    <div>
      <label htmlFor="arrivalDate">Arrival Date:</label>
      <input type="text" id="arrivalDate" ref={arrivalDateInputRef} readOnly />

      <label htmlFor="departureDate">Departure Date:</label>
      <input type="text" id="departureDate" ref={departureDateInputRef} readOnly />

      <div ref={datePickerContainerRef}></div>
    </div>
  );
};

export default DatePickerComponent;
