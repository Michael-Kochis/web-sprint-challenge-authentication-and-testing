const router = require('express').Router();
const users = require('./user-model');

router.get("/", async (req, res, next) => {
    await users.find()
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;

    users.remove(id)
        .then(() => {
            res.status(200).json({ message: `User id ${id} deleted.`})
        }).catch(next);
})

module.exports = router;
