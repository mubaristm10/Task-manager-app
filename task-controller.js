const Task = require('../db/models/task-schema');

module.exports.add = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({ title, description, status });
    return res.status(200).json({ message: 'task added successfully' });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

module.exports.get = async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) {
      query.status = status;
    }
    const response = await Task.find(query);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
module.exports.edit = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;

    const query = {};
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }
    if (title) {
      query.title = title;
    }
    if (description) {
      query.description = description;
    }
    if (status) {
      query.status = status;
    }

    const response = await Task.findByIdAndUpdate(id, query, { new: true });

    return res.status(200).json({ message: 'Edited successfully', response });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
module.exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }

    const response = await Task.findByIdAndDelete(id);
    return res.status(200).json({ message: 'task dleted succesfully' });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

module.exports.completed = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(
      id,
      { status: 'completed' },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }
    return res.status(200).json({ message: 'task marked as completed', task });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
