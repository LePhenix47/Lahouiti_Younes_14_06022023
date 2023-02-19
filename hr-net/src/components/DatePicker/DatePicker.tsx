import React from "react";

type DatePickerType = {
  name: string;
  id: string;
  reference: any;
};

export default function DatePicker({
  name,
  id,
  reference,
}: DatePickerType): JSX.Element {
  return (
    <input
      type="date"
      name={name}
      id={id}
      className="home-page__input data-picker"
      ref={reference}
    />
  );
}
