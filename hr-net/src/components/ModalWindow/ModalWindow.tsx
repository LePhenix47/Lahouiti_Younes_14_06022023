import React, { useState } from "react";

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
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //Because the "open" attribute doesn't
    <dialog {...(isOpen && open)} className="modal-window">
      <button
        className="modal-window__close-button"
        onClick={() => {
          //Add a function that create a transition when closing the window here:
          setIsOpen(false);
        }}
      ></button>
      <div className="modal-window__content-wrapper">{children}</div>
    </dialog>
  );
}
