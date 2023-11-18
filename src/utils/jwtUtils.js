import jwt from 'jsonwebtoken';

const jwtUtils = {
    signToken: (payload) => {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '3h' });
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.SECRET_KEY);
    },
};

export default jwtUtils;