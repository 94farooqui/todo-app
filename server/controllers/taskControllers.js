import Task from "../models/Task.js";
import User from "../models/User.js";

export const getAllTasks = async (req, res) => {
  const { filter } = req.query;
  //console.log("Filter", filter);
  const user = req.user;
  //console.log("User Id",user.userId);
  try {
    const foundUser = await User.findById(user.userId).populate("tasks");
    if (foundUser) {
      const filteredTasks = foundUser.tasks.filter(
        (task) => task.status == filter
      );
      return res.status(200).json(filteredTasks);
      //console.log("Found User", foundUser)
    }
  } catch (error) {}
};

export const getOneTask = (req, res) => {};

export const addOneTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const taskAdded = await newTask.save();
    if (taskAdded) {
      const user = await User.findById(req.user.userId);
      user.tasks.push(taskAdded._id);
      const userUpdated = await user.save();
      if (userUpdated) {
        return res.status(200).json(taskAdded);
      }
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const updateOneTask = async (req, res) => {
  const { taskId } = req.params;
//console.log("Task Update request", req.body)
  try {
    const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    if(task){
        //console.log(task)
        return res.status(200).json(task)
    }
    
  } catch (error) {
    return res.status(500).json({error:"Server error"})
  }
};

export const deletOneTask = (req, res) => {};
