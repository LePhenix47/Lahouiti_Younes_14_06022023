import React from "react";

export default function SelectDropdown({
  id,
  options,
  object,
  propertyName,
  valueForOption,
}: {
  id: string;
  options: any[];
  object?: boolean | undefined;
  propertyName?: string | undefined;
  valueForOption?: string | undefined;
}): JSX.Element {
  const isNormalArray: boolean | undefined = options && !object;
  const isArrayOfObjects: boolean | undefined = options && object;
  return (
    <select className="select-dropdown" id={id}>
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
