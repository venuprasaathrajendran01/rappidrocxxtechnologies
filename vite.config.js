import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "owner.html",
        "certifications.html",
        "payments.html",
        "project-gallery.html",
        "flyers.html",
        "services-software.html",
        "services-design.html",
        "services-media.html",
        "services-business.html",
      ],
    },
  },
});
