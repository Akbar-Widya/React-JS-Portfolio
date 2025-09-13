import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SongsProvider } from "./contexts/SongsContext.jsx";
import App from "./App.jsx";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SongsProvider>
        <App />
      </SongsProvider>
    </BrowserRouter>
  </StrictMode>
);
