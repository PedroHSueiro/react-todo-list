import React, { useEffect, useRef } from "react";
import "./dialog.style.css";

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
      <dialog ref={dialogRef}>
        <p>This is a dialog</p>
        <button onClick={onClose}>Close</button>
      </dialog>
    </React.Fragment>
  );
}
