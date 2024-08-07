import express from "express"
import cors from "cors";

const router = express.Router();
router.use(cors());

import testData from "../../scr/test.data.json";

router.get("/contests", (req, res) => {
    // get the data from mongo DB
    res.send(testData);
});

// router.get("/contest");

export default router;