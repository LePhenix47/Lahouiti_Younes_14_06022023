import React from "react";

type DatePickerType = {
  name: string;
  id: string;
};

export default function DatePicker({ name, id }: DatePickerType): JSX.Element {
  return (
    <input
      type="date"
      name={name}
      id={id}
      className="home-page__input data-picker"
    />
  );
}
