const jwt = require('jsonwebtoken');

const validatingAuthToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).send({ success: false, message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send({ success: false, message: "Invalid Token" });
    }
};

module.exports = validatingAuthToken;
