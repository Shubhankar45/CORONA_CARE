import {Message} from '../models/messageSchema.js';
import { catchAsyncErrors } from '../middleware/catchAsyncError.js';
import errorHandler from '../middleware/errorMiddleware.js';


export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new errorHandler("Please Fill Full Form!!!"))
    }

    try {
        await Message.create({ firstName, lastName, email, phone, message });
        res.json({ success: true, message: 'Success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error' });
    }
})