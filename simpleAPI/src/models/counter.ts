import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    count: { type: Number, default: 0 }
});

export const Counter = mongoose.model('Counter', counterSchema);
