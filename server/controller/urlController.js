import { nanoid } from 'nanoid'
import URL from '../model/url.model.js';

export const generateShortenerId = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({
            status: false,
            message: "URL is required"
        });
    }
    try {
        const shortId = nanoid(8);

        const shorterURL = await URL.create({
            shortnerId: shortId,
            redirectURL: url,
            visitHistory: [],
        });

        return res.status(201).json({
            success: true,
            message: "shorter URL generate successfully",
            shortUrl: `${req.protocol}://${req.get("host")}/api/${shortId}`,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const redirectURL = async (req, res) => {


    const { shortnerId } = req.params;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortnerId },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() },
                },
                $inc: {
                    clicks: 1
                }
            },
            { new: true },
        );

        if (!entry) {

            return res.status(404).json({ message: "Short URL not found" });
        }
        console.log("Entry:", entry);

        return res.redirect(entry.redirectURL);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const getAnalytics = async (req, res) => {
    const { shortnerId } = req.params;

    try {
        const entry = await URL.findOne({ shortnerId });
        if (!entry) {
            return res.status(404).json({
                success: false,
                message: "Short URL not found"
            });
        }

        return res.status(200).json({
            success: true,
            totalClicks: entry.visitHistory.length,
            visitHistory: entry.visitHistory
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}