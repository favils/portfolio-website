import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  githubRepo: { type: String, required: true },
  liveDemoLink: { type: String },
  image: { type: String },
});

export const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
  