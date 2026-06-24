import React, { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ children, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    isOpen ? openDialog() : closeDialog();
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <React.Fragment>
      <dialog className="dialog" ref={dialogRef}>
        <div className="btn-close-wrapper">
          <button onClick={onClose} className="btn-close">
            <IconClose></IconClose>
          </button>
        </div>
        {children}
      </dialog>
    </React.Fragment>
  );
}
