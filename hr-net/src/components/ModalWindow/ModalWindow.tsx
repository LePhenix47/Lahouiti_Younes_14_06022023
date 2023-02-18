//React
import { log } from "@/react-utils/functions/helper-functions";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

/**
 * Pop-up window
 *
 * Useful methods to use:
 *
 * - `showModal()` to open the window
 *
 * - `close()` to close it
 *
 */
export default function ModalWindow({
  content,
  isOpen,
  setIsOpen,
}: {
  content: JSX.Element;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const dialogRef: React.MutableRefObject<null> = useRef(null);

  //@ts-ignore
  const openedOnlyOnce: boolean = !dialogRef?.current?.attributes.open;

  function closeModal() {
    //@ts-ignore
    dialogRef?.current?.close();
    setIsOpen(false);
  }

  if (isOpen && openedOnlyOnce) {
    //@ts-ignore
    dialogRef?.current?.showModal();
  }

  return (
    //Because the "open" attribute doesn't
    <dialog className="modal-window" ref={dialogRef}>
      <button
        className="modal-window__close-button"
        onClick={() => {
          //Add a function that create a transition when closing the window here:
          closeModal();
        }}
      >
        Close
      </button>
      <div className="modal-window__content-wrapper">{content}</div>
    </dialog>
  );
}
