import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizeComponent = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Background overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000, // Ensure it appears on top
        }}
      >
        {/* Popup container */}
        <ResizableBox
          width={600}
          height={400}
          minConstraints={[300, 200]} // Minimum size
          maxConstraints={[800, 600]} // Maximum size
          resizeHandles={["se", "sw", "ne", "nw"]} // Resize handles
          style={{
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            overflow: "hidden", // Clip content
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "10px",
              background: "#333",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>Resizable Popup</h3>
            <button
              onClick={onClose}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>

          {/* Content */}
          <div
            style={{
              padding: "10px",
              flex: 1,
              overflow: "auto", // Scrollbar for the content
            }}
          >
            {children}
          </div>
        </ResizableBox>
      </div>
    </div>
  );
};

export default ResizeComponent;
