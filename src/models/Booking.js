import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ticketId: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true,
    },
    ticketType: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    bookingStatus: {
        type: String,
        required: true,
    },
    bookingReference: {
        referenceId: {
            type: String,
        },
        qrCode: {
            type: String,
        }
    },
    paymentDetails: {
        paymentMethod: {
            type: String,
            enum: ['Credit Card', 'UPI', 'Netbanking'],
        },
    },
    ticketDetails: {
        type: Schema.Types.Mixed,
    },
});

bookingSchema.set('timestamps', true);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;