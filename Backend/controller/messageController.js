import {Message} from '../models/messageSchema.js';

export const sendMessage = async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
        return res.json({ success: false, message: 'All fields are required' });
    }

    try {
        await Message.create({ firstName, lastName, email, phone, message });
        res.json({ success: true, message: 'Success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error' });
    }
};