const express = require('express');
const router = express.Router();
router.get('/api/posts', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teste',
        version: '1.0.0',
    });
});

app.post("/users", async (req, res) => {
    const { name, email, role } = req.body
    try {
        const user = await User.create({ name, email, role });
        return res.json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;