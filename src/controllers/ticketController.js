import Ticket from '../models/Ticket.js';
import Event from '../models/Event.js';

const addTickets = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ error: constants.EVENT_NOT_FOUND });
        }

        const ticketsData = req.body;

        if (!Array.isArray(ticketsData) || ticketsData.length === 0) {
            return res.status(400).json({ error: "Invalid Tickets" });
        }

        const totalQuantity = ticketsData.reduce((acc, ticket) => acc + ticket.quantity, 0);

        if (totalQuantity === 0) {
            return res.status(400).json({ error: "Invalid ticket quantites" })
        }

        const ticketsToBeInserted = ticketsData.map(ticketData => ({
            eventId, ...ticketData
        }));

        // Add tickets to Ticket collection and event tickets array
        await Ticket.insertMany(ticketsToBeInserted)
            .then(async (tickets) => {
                for (const ticket of tickets) {
                    event.tickets.push({
                        ticketId: ticket._id,
                        price: ticket.price,
                    });

                    await event.save();
                }
            });

        res.status(200).json({ message: "Tickets added successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Could not add tickets" });
    }
};

const updateTicket = async (req, res) => {
    try {
        const ticketId = req.params.ticketId;
        const updatedData = req.body;
         
        const ticketToBeUpdated = await Ticket.findByIdAndUpdate(
            ticketId, updatedData, { new: true }
        );

        if (!ticketToBeUpdated) {
            return res.status(400).json({ error: 'Error updating ticket' });
        }
        res.status(200).json({ message: 'Ticket updated Successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: constants.STATUS_INTERNAL_SERVER_ERROR });
    }
};

const deleteTicket = async (req, res) => {
    try {
        const ticketId = req.params.ticketId;
        const deletedTicket = await Ticket.findByIdAndDelete(ticketId);

        if (!deletedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }

        res.status(204).send();

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: constants.STATUS_INTERNAL_SERVER_ERROR });
    }
};

export default {
    addTickets,
    updateTicket,
    deleteTicket,
};