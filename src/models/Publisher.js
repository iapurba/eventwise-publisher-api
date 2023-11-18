import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const publisherSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // Password will be removed later, OTP verification will be implemented
    password: {
        type: String,
        required: true,
    },
    hasGSTRegistration: {
        type: Boolean,
        required: true,
    },
    GSTNumber: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    stateOrUT: {
        type: String,
        required: true,
    },
    PAN: {
        type: String,
    },
    // Banking details are optional for the time being
    bankAccountDetails: {
        accountType: {
            type: String,
            enum: ['savings', 'current'],
            required: false,
        },
        beneficiaryName: {
            type: String,
            required: false,
        },
        accountNumber: {
            type: String,
            required: false,
        },
        IFSC: {
            type: String,
            required: false,
        },
        cancelledCheque: {
            type: String,
            required: false,
        },
    },
});

publisherSchema.pre('save', async function (next) {
    const publisher = this;
    if (publisher.isModified('password')) {
        const hashedPassword = await bcrypt.hash(publisher.password, 10);
        publisher.password = hashedPassword;
    }
    next();
});

publisherSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const EventPublisher = mongoose.model('Publisher', publisherSchema);

export default EventPublisher;
