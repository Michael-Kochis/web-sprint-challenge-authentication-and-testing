const verifyUserInputs = (req, res, next) => {
    const neoUser = req.body;
    let passed = true;

    if (!neoUser || !neoUser.username 
        || typeof(neoUser.username) !== "string") {
            passed = false;
    } else if (!neoUser.password || typeof(neoUser.password) !== "string") {
        passed = false;
    }

    if (passed) {
        next();
    } else {
        res.status(422).json({ 
            message: "username and password required"
        });
    }
}

module.exports = {
    verifyUserInputs
}