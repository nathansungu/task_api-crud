import express from "express";
import { PrismaClient } from "@prisma/client";

import checkId from "./middleweare/chechId.js";
import validateTaskDetails from "./middleweare/validateTaskDetails.js";

const client = new PrismaClient();

const app = express();
app.use(express.json());
app.get("/", async (_req, res)=>{

    return res.send(`<h1>Welcome To Our Page</h1>`)  
  
});

app.get("/task", async (_req, res) => {
  try {
    const allTask = await client.task.findMany({
      where: { isDeleted: !true },
    });

    return res.status(200).json({ data: { allTask } });
  } catch (e) {
    return res.status(500).json({ message: "Ooops! Something went wrong." });
  }
});

app.get("/task/:Id", checkId, async (req, res) => {
  const { Id } = req.params;
  try {
    console.log(Id);
    const task = await client.task.findUnique({
      where: { id: Id },
    });
    if (task) {
      return res.status(200).json({ data: task });
    } else {
      return res.status(500).json({ message: "Invalid Id." });
    }
  } catch (e) {
    return res.status(500).json({ message: "Ooops! Something went wrong." });
  }
});

app.post("/task", validateTaskDetails, async (req, res) => {
  const { title, isCompleted, description } = req.body;
  try {
    const newTask = await client.task.create({
      data: {
        title: title,
        description: description,
        isCompleted: isCompleted,
      },
    });
    return res
      .status(201)
      .json({ message: "Task created succesfully.", data: { newTask } });
  } catch (e) {
    return res.status(500).json({ message: "Ooops! SOmething went wrong." });
  }
});

app.delete("/task/:Id", checkId, async (req, res) => {
  const { Id } = req.params;
  try {
    const deleted = await client.task.update({
      where: { id: Id },
      data: { isDeleted: true },
    });
    return res.status(200).json({ message: "Product deleted." });
  } catch (e) {
    return res.status(500).json({ message: "Ooops! Something went wrong." });
  }
});

app.put("/task/:Id", checkId, async (req, res) => {
  const { Id } = req.params;
  const { title, description, isComplete } = req.body;
  try {
    const update = await client.task.update({
      where: { id: Id },
      data: { title: title, description: description, isCompleted: isComplete },
    });
    if (update) {
      res.status(200).json({ message: "Updated succesfully.", data: update });
    }
  } catch (e) {
    return res.status(500).json({ message: "Ooops! Something went wrong." });
  }
});

app.patch("/task/:Id", checkId, async (req, res) => {
  const { Id } = req.params;
  const { title, description, isComplete } = req.body;
  try {
    const patched = await client.task.update({
      where: { id: Id },
      data: {
        title: title && title,
        description: description && description,
        isCompleted: isComplete && isComplete,
      },
    });
    if (patched) {
      return res.status(200).json({ data: { patched } });
    }
  } catch (e) {
    return res.status(500).json({ message: "Ooops! Something went wrong." });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
