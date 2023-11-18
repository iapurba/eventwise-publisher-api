import Event from '../models/Event.js';
import constants from '../utils/constants.js';

const createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        const publisher = req.user.publisherId;

        const event = new Event({
            ...eventData,
            createdBy: publisher
        });
        await event.save();
        res.status(201).json({ message: constants.EVENT_CREATED, data: event });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: constants.STATUS_BAD_REQUEST });
    }
};

const updateEvent = async (req, res) => {
    const { eventId } = req.params;
    const eventDataToUpdate = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(eventId, eventDataToUpdate, { new: true });
        res.status(200).json({ message: constants.EVENT_UPDATED, data: updatedEvent });
    } catch (error) {
        res.status(500).json({ error: "Update Failed" });
    }
};

const deleteEvent = async (req, res) => {
    const eventId = req.event._id;
    try {
        await Event.findByIdAndDelete(eventId);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: "Deletion Failed" });
    }
};

export default {
    createEvent,
    updateEvent,
    deleteEvent,
};
