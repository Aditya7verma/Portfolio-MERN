const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Certificate,
} = require("../models/portfolioModel");

const User = require("../models/userModel");

// get all Portfolio Data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const certificates = await Certificate.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      contact: contacts[0],
      experiences: experiences,
      certificate: certificates,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Intro - Its an API end-point
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body, //here updating all the values
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully.",
    });
  } catch (error) {
    console.error("Error updating intro:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the intro",
      error: error.message,
    });
  }
});

// Update About - Its an API end-point
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body, //here updating all the values
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully.",
    });
  } catch (error) {
    console.error("Error updating about:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the about",
      error: error.message,
    });
  }
});

// Add Experience

router.post("/add-experience", async (req, res) => {
  try {
    // console.log("Received data:", req.body);
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully.",
    });
  } catch (error) {
    console.error("Error adding experience:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the experience",
      error: error.message,
    });
  }
});

// Update Experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    console.log("Error updating experience:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while adding the experience",
      error: error.message,
    });
  }
});

// Delete Experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting experience:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while deleting the experience",
      error: error.message,
    });
  }
});

// Api Route for add Project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.log("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while adding the project",
      error: error.message,
    });
  }
});

// Updating the project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.log("Error updating project:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while updating the project",
      error: error.message,
    });
  }
});

// Deleting the project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting project:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while deleting the project",
      error: error.message,
    });
  }
});

// Api Route for add Certificate
router.post("/add-certificate", async (req, res) => {
  try {
    const certificate = new Certificate(req.body);
    await certificate.save();
    res.status(200).send({
      data: certificate,
      success: true,
      message: "Certificate added successfully",
    });
  } catch (error) {
    console.log("Error adding certificate:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while adding the certificate",
      error: error.message,
    });
  }
});

// Updating the Certificate
router.post("/update-certificate", async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: certificate,
      success: true,
      message: "Certificate updated successfully",
    });
  } catch (error) {
    console.log("Error updating certificate:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while updating the certificate",
      error: error.message,
    });
  }
});

// Deleting the Certificate
router.post("/delete-certificate", async (req, res) => {
  try {
    const certificate = await Certificate.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: certificate,
      success: true,
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting certificate:", error);
    res.status(500).send({
      success: false,
      message: "An error occured while deleting the certificate",
      error: error.message,
    });
  }
});

// Update Contact - Its an API end-point
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body, //here updating all the values
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully.",
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the contact",
      error: error.message,
    });
  }
});

// Admin Login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      user.password = "";
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfull",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    console.error("Error in Login:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
