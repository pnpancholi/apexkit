"use client";
import { useEffect, useRef, useState } from "react";

export default function UpdateEmail() {
  console.log("mounted");
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);

      console.log("backdrop clicked");
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      <button
        className="btn btn-outline btn-primary w-full mt-4"
        onClick={() => {
          console.log("open clicked");
          setIsOpen(true);
        }}
      >
        Update Email
      </button>
      {isOpen && (
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
          <div className="modal-box">
            <h3 className="font-bold text-xl">Update Email</h3>
          </div>
        </div>
      )}
    </>
  );
}
