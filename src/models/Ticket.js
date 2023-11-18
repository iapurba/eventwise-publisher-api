import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        requred: true,
    },
    ticketType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    availableQuantity: {
        type: Number,
        required: true,
        default: function() {
            return this.quantity;
        },
    },
    startSaleDate: {
        type: Date,
        required: true,
    },
    endSaleDate: {
        type: Date,
    },
    maxTicketsPerOrder: {
        type: Number,
        required: true,
    },
    extraInfo: {
        type: String,
    },
    discounts: [
        {
            code: String,
            description: String,
            discountPercentage: Number,
            startDate: Date,
            endDate: Date,
            MaxUsageCount: Number,
        }
    ],
    seatingDetails: {
        type: Schema.Types.Mixed,
    },
});

ticketSchema.set('timestamps', true);

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;