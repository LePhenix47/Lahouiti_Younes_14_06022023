import React from "react";

export default function SelectDropdown({
  options,
}: {
  options: string[] | number[];
}): JSX.Element {
  return (
    <select className="select-dropdown">
      {options &&
        options.map((value: string | number, index: number) => {
          return (
            <option
              className="select-dropdown__option"
              key={`${index}-${value}`}
            >
              {value}
            </option>
          );
        })}
    </select>
  );
}
