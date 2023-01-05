const express = require('express');
const router = express.Router();
const { User } = require('../models');
router.post("/api/users", async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({ username, email, password });
        return res.json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;

