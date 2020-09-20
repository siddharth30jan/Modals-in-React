import React from "react";
import { createPortal, render } from "react-dom";
import Form from "./Form";
import "./Modal.css";

export default function Modal({ data, setForm, isForm }) {
  return render(
    <>
      {isForm ? (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <Form data={data} setForm={setForm} />{" "}
          </div>
        </>
      ) : null}
    </>,
    document.getElementById("portal")
  );
}
