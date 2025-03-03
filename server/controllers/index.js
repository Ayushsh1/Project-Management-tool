import Project from '../models/index.js';
import joi from 'joi';
import mongoose from 'mongoose';

export const getProjects = async (req, res) => {
  try {
    const data = await Project.find({}, { task: 0, __v: 0, updatedAt: 0 });
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
};

export const getProjectById = async (req, res) => {
  if (!req.params.id) res.status(422).send({ data: { error: true, message: 'Id is required' } });
  try {
    const data = await Project.find({ _id: mongoose.Types.ObjectId(req.params.id) }).sort({ order: 1 });
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
};

export const createProject = async (req, res) => {
  const projectSchema = joi.object({
    title: joi.string().min(3).max(30).required(),
    description: joi.string().required(),
  });

  const { error, value } = projectSchema.validate({ title: req.body.title, description: req.body.description });
  if (error) return res.status(422).send(error);

  try {
    const data = await new Project(value).save();
    res.send({ data: { title: data.title, description: data.description, updatedAt: data.updatedAt, _id: data._id } });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(422).send({ data: { error: true, message: 'title must be unique' } });
    } else {
      return res.status(500).send({ data: { error: true, message: 'server error' } });
    }
  }
};

export const updateProject = async (req, res) => {
  const projectSchema = joi.object({
    title: joi.string().min(3).max(30).required(),
    description: joi.string().required(),
  });

  const { error, value } = projectSchema.validate({ title: req.body.title, description: req.body.description });
  if (error) return res.status(422).send(error);

  try {
    const data = await Project.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, { ...value }, { upsert: true });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const data = await Project.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

// Add similar functions for task-related operations