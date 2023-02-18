import React from "react";

export default function DatePicker({
  name,
  id,
}: {
  name: string;
  id: string;
}): JSX.Element {
  return <input type="date" name={name} id={id} />;
}
