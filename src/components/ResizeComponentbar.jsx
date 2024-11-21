import React, { useState } from "react";
import ResizeComponent from "./ResizeComponent";

const ResizeComponentbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div>
      <div>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="absolute z-300"
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Open Popup
        </button>

        <ResizeComponent
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        >
          <p>
            This is the content inside the popup. Resize the popup by dragging
            from the corners or edges.
          </p>
          <p>Scroll inside if the content exceeds the popup size.</p>
          <p>Add more content here...</p>
        </ResizeComponent>
      </div>
    </div>
  );
};

export default ResizeComponentbar;
