import EventPublisher from '../models/Publisher.js';
import constants from '../utils/constants.js';
import jwtUtils from '../utils/jwtUtils.js';

const registerPublisher = async (req, res) => {
    console.log(req.body);
    try {
        const { email } = req.body;
        const existingPublisher = await EventPublisher.findOne({ email });

        if (existingPublisher) {
            return res.status(409).json({ error: 'Email is already registered!' });
        }

        const publisher = new EventPublisher({ ...req.body });
        await publisher.save();

        const token = jwtUtils.signToken({
            publisherId: publisher._id,
            email: publisher.email,
            name: publisher.name,
        });

        res.status(201).json({ message: 'Publisher created successfully', token });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: constants.STATUS_BAD_REQUEST });
    }
};

const loginPublisher = async (req, res) => {
    try {
        const { email, password } = req.body;
        const publisher = await EventPublisher.findOne({ email });

        if (!publisher) {
            return res.status(401).json({ error: constants.AUTH_INVALID_CREDENTIALS });
        }

        const passwordMatches = await publisher.comparePassword(password);
        if (!passwordMatches) {
            return res.status(401).json({ error: constants.AUTH_INVALID_CREDENTIALS });
        }

        const token = jwtUtils.signToken({
            publisherId: publisher._id,
            email: publisher.email,
            name: publisher.name,
        });

        res.status(200).json({ message: 'Login Successful', token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error logging publisher' });
    }
};

export default {
    registerPublisher,
    loginPublisher,
};