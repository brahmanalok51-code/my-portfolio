const Contact = require("../model/userSchema");

exports.contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message Saved Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
