import React from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="w-[739px] h-[992px] bg-amarelo">
      <p>MODAL</p>
    </div>
  );
}
