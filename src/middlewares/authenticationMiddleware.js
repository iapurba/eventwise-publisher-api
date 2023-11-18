import jwtUtils from '../utils/jwtUtils.js';
import constants from '../utils/constants.js';

export const requireLogin = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: constants.AUTH_UNAUTHORIZED });
    }
    try {
        const decoded = jwtUtils.verifyToken(token);
        req.user = decoded;
        next();

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            res.status(401).json({ message: constants.AUTH_INVALID_TOKEN });
        } else {
            console.log(error.message);
            res.status(500).json({ message: constants.STATUS_INTERNAL_SERVER_ERROR });
        }
    }
};