"use client";
import { updateEmail } from "@/lib/actions/auth";
import { useEffect, useState } from "react";

export default function UpdateEmail() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  // @dev: this takes care of providing a good user experience with modal
  // 1. Close on esc key
  useEffect(() => {
    const handleESCKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleESCKey)
    }
    return () => {
      document.removeEventListener("keydown", handleESCKey)
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const handleUpdateEmail = async () => {
    const res = await updateEmail(email)
  }
  return (
    <>
      <button
        className="btn btn-outline btn-primary w-full mt-4"
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Update Email
      </button>
      {isOpen && (
        <div className={`modal ${isOpen ? "modal-open" : ""}`} onClick={handleBackdropClick}>
          <div className="modal-box space-y-6 animate-in fade-in duration-300 space-y-6 min-h-[200px]">
            <div className="form-control">
              <h3 className="font-bold text-xl mb-10">Update Email</h3>
              <input type="text" className="input" placeholder="Enter your new email" value={email} onChange={e => setEmail(e.target.value)} />
              <button className="btn btn-primary" type="button" onClick={handleUpdateEmail}>Update email</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
