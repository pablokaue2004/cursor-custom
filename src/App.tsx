import React, { MouseEvent, useState } from "react";
import CustomCursor from "./components/CustomCursorModel";
import "./App.css";

const App: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setMenuVisible(true);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) {
      setMenuVisible(false);
      // Lógica para tratar o clique com o botão esquerdo
    }
  };

  const handleMenuClick = () => {
    setMenuVisible(false);
    // Lógica específica do item de menu selecionado
  };

  return (
    <div
      className="App"
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <div
        style={{
          backgroundColor: "#3d3d3d",
          height: "100vh",
          margin: -8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "white", fontFamily: "Arial" }}>
          Menu de contexto personalizado
        </h1>
        <p style={{ color: "white", fontFamily: "Arial", marginTop: "-10px" }}>
          Clique com o botão direito do mouse
        </p>
        <CustomCursor innerColor="white" outerColor="transparent" />
        {menuVisible && (
          <div
            style={{
              position: "fixed",
              top: menuPosition.y,
              left: menuPosition.x,
              borderRadius: 10,
              backgroundColor: "#eee",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                width: 200,
              }}
            >
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "5px 0",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textDecoration: "none",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <svg
                  fill="currentColor"
                  style={{ color: "#000", marginRight: "5px", width: 30 }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />{" "}
                </svg>
                <span style={{ fontFamily: "arial" }}>LinkedIn</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "5px 0",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textDecoration: "none",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <svg
                  fill="currentColor"
                  style={{ color: "#000", marginRight: "5px", width: 30 }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                </svg>
                <span style={{ fontFamily: "arial" }}>GitHub</span>
              </a>
              <a
                href="mailto:seuemail@example.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "5px 0",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textDecoration: "none",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <svg
                  fill="currentColor"
                  style={{ color: "#000", marginRight: "5px", width: 30 }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                <span style={{ fontFamily: "arial" }}>E-mail</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
