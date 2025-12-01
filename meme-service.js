import express from "express";
import cors from "cors";
import fetch from "node-fetch";

function runMemeService() {
    const app = express();
    app.use(cors());

    app.get("/meme", async (req, res) => {
        try {
            const response = await fetch("https://meme-api.com/gimme/wholesomememes");
            const data = await response.json();

            console.log("Meme fetched:", data.url);  

            return res.json({
                success: true,
                url: data.url,
            });
        } catch (err) {
            console.log("Meme fetch failed, sending fallback meme.");

            return res.status(500).json({
                success: false,
                url: "https://i.imgflip.com/1ur9b0.jpg",
                error: err.message,
            });
        }
    });

    const PORT = 5001;
    console.log(`✅ Meme Service running on port ${PORT}...`);
    app.listen(PORT);
}

runMemeService();
