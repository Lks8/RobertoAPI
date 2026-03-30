import express from 'express';
import RobertoAPI from './index.js';
import commentType from './commentType.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get("/api/comment", (req, res) => {
    console.log("Requisição recebida para /api/comment");
    const type = req.query.type || commentType.RANDOM;
    try {
        const comment = RobertoAPI.getComment(type);
        res.json({ comment });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Entre em http://localhost:${PORT}/api/comment para obter um comentário!`));