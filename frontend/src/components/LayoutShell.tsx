import React from "react";

const LayoutShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: "grid", gap: 16 }}>
    {children}
  </div>
);

export default LayoutShell;