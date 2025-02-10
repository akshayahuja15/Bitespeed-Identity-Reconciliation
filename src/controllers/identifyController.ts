import { Request, Response } from 'express';
import { ContactService } from '../services/contactService';

export const identifyHandler = async (req: Request, res: Response) => {
    const { email, phoneNumber } = req.body;

    if (!email && !phoneNumber) {
        return res.status(400).json({ error: 'Email or phoneNumber is required' });
    }

    try {
        const contact = await ContactService.identifyContact(email, phoneNumber);
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};