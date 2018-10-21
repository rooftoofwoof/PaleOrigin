import PaleOrigin from "./model";

export const createPaleOrigin = async (req, res) => {
  const { title, description } = req.body;
  const newPaleOrigin = new PaleOrigin({ title, description });

  try {
    return res.status(201).json({ paleorigin: await newPaleOrigin.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: "Error with PaleOrigin" });
  }
};

export const getAllPaleOrigin = async (req, res) => {
  try {
    return res.status(200).json({ paleorigins: await PaleOrigin.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: "Error with PaleOrigin" });
  }
};
