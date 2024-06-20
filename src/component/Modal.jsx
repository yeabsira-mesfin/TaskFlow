import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";
const Modal = forwardRef(({ children,buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-gray-900/90 bg-blue-300 text-white p-4 rounded-md shadow-md">
      {children}
      <form action="" method="dialog" className="mt-4 text-right">
        <Button> {buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
