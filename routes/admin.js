import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

// Import controllers
import * as slidesController from "../controllers/slidesController.js";
import * as servicesController from "../controllers/servicesController.js";
import * as teamController from "../controllers/teamController.js";
import * as projectsController from "../controllers/projectsController.js";
import * as contactController from "../controllers/contactController.js";

import * as socialMediaController from "../controllers/socialMediaController.js";
import * as mapsController from "../controllers/mapsController.js";

const router = express.Router();

// ===== SLIDES ROUTES =====
router.get("/slides", slidesController.getSlides);
router.get("/slides/:id", slidesController.getSlideById);
router.post("/slides", verifyToken, upload.single("image"), slidesController.createSlide);
router.put("/slides/:id", verifyToken, upload.single("image"), slidesController.updateSlide);
router.delete("/slides/:id", verifyToken, slidesController.deleteSlide);

// ===== SERVICES ROUTES =====
router.get("/services", servicesController.getServices);
router.post("/services", verifyToken, servicesController.createService);
router.put("/services/:id", verifyToken, servicesController.updateService);
router.delete("/services/:id", verifyToken, servicesController.deleteService);

// ===== TEAM ROUTES =====
router.get("/team", teamController.getTeam);
router.post("/team", verifyToken, upload.single("photo"), teamController.createTeamMember);
router.put("/team/:id", verifyToken, upload.single("photo"), teamController.updateTeamMember);
router.delete("/team/:id", verifyToken, teamController.deleteTeamMember);

// ===== PROJECTS ROUTES =====
router.get("/projects", projectsController.getProjects);
router.post("/projects", verifyToken, upload.single("image"), projectsController.createProject);
router.put("/projects/:id", verifyToken, upload.single("image"), projectsController.updateProject);
router.delete("/projects/:id", verifyToken, projectsController.deleteProject);

// ===== CONTACT INFO ROUTES =====
router.get("/contact", contactController.getContactInfo);
router.post("/contact", verifyToken, contactController.createContactInfo);
router.put("/contact/:id", verifyToken, contactController.updateContactInfo);
// ===== CONTACT MESSAGES (ADMIN) =====
router.get(
  "/messages",
  verifyToken,
  contactController.getContactMessages
);


// ===== SOCIAL MEDIA ROUTES =====
router.get("/social-media", socialMediaController.getSocialMedia);
router.post("/social-media", verifyToken, socialMediaController.createSocialMedia);
router.put("/social-media/:id", verifyToken, socialMediaController.updateSocialMedia);
router.delete("/social-media/:id", verifyToken, socialMediaController.deleteSocialMedia);

// ===== MAPS ROUTES =====
router.get("/maps", mapsController.getMaps);
router.post("/maps", verifyToken, mapsController.createMap);
router.put("/maps/:id", verifyToken, mapsController.updateMap);
router.delete("/maps/:id", verifyToken, mapsController.deleteMap);



export default router;
