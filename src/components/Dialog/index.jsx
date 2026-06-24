import React, { useRef } from "react";
import "./dialog.style.css";

export function Dialog() {

    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return (
        <React.Fragment>
        <button onClick={openDialog}>Show the dialog</button>
        <dialog ref={dialogRef}>
            <p>This is a dialog</p>
            <button onClick={closeDialog}>Close</button>
        </dialog>
        </React.Fragment>
    );
}
