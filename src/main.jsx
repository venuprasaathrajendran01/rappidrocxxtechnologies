import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import OwnerPage from "./Owner.jsx";
import ServiceDetails from "./ServiceDetails.jsx";
import CertificationsPage from "./Certifications.jsx";
import PaymentsPage from "./Payments.jsx";
import ProjectGalleryPage from "./ProjectGallery.jsx";
import FlyersPage from "./Flyers.jsx";
import { initializeFestivalMode } from "./festivalMode.js";
import { initializePageTransitions } from "./pageTransitions.js";
import { serviceCategories } from "./serviceData.js";
import "./styles.css";

initializePageTransitions();
initializeFestivalMode();

const serviceCategory = serviceCategories.find(
  (category) => category.page === window.location.pathname,
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {window.location.pathname === "/owner.html" ? (
      <OwnerPage />
    ) : window.location.pathname === "/certifications.html" ? (
      <CertificationsPage />
    ) : window.location.pathname === "/payments.html" ? (
      <PaymentsPage />
    ) : window.location.pathname === "/project-gallery.html" ? (
      <ProjectGalleryPage />
    ) : window.location.pathname === "/flyers.html" ? (
      <FlyersPage />
    ) : serviceCategory ? (
      <ServiceDetails category={serviceCategory} />
    ) : (
      <App />
    )}
  </React.StrictMode>,
);
