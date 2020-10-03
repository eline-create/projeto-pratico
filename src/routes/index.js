const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Músicas infantis para cantar, dançar e aprender!",
        data: "02/10/2020"
    })
});

module.exports = router;


