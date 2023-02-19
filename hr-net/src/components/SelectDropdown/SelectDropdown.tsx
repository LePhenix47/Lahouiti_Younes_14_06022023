import React from "react";

type SelectDropdownType = {
  id: string;
  reference: any;
  options: any[];
  object?: boolean | undefined;
  propertyName?: string | undefined;
  valueForOption?: string | undefined;
};

export default function SelectDropdown({
  id,
  reference,
  options,
  object,
  propertyName,
  valueForOption,
}: SelectDropdownType): JSX.Element {
  //
  const isNormalArray: boolean | undefined = options && !object;
  //
  const isArrayOfObjects: boolean | undefined = options && object;
  return (
    <select className="select-dropdown" id={id} ref={reference}>
      {isNormalArray &&
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

      {isArrayOfObjects &&
        options.map((object: any, index: number) => {
          //@ts-ignore
          const propertyNameValue = object[propertyName];

          //@ts-ignore
          const valueForOptionValue = object[valueForOption];
          return (
            <option
              className="select-dropdown__option"
              key={`${index}-${propertyNameValue}`}
              value={valueForOptionValue}
            >
              {propertyNameValue}
            </option>
          );
        })}
    </select>
  );
}
