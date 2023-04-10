const express = require("express");
const router = express.Router();
const data = require('../data/data.js');

router.route('/sm')
.get(async (req, res) => {

    try {
        const result = await data.getAllSm();
        res.status(200).json(result);  
    }catch(e) {
        res.status(500).send("Error retriving data from the database");
    }

})
.post(async (req, res) => {

    try {
        let response = req.body;
        let catId = response.catId;
        let desc = response.desc;
        let status = response.status;

        const result = await data.createSm(catId, desc, status);
        res.status(200).json(result);
    } catch(e) {
        res.status(500).send(e);
    }

})
.put(async (req, res) => {
    try {
        let response = req.body;
        for(let i = 0; i < response.length; i++) {
            let temp = response[i];
            await data.updateSm(temp["id"], temp["CategoryID"], temp["Description"], temp["Active"]);
        }
        res.status(200).json("Data updated successfully");
    } catch(e) {
        res.status(500).send(e);
    }
})


router.route('/lg')
.get(async (req, res) => {

    try {
        const result = await data.getAllLa();
        res.status(200).json(result);  
    }catch(e) {
        res.status(500).send("Error retriving data from the database");
    }

})
.post(async (req, res) => {

    try {
        let response = req.body;
        let codeId = response.codeId;
        let catId = response.catId;
        let sdesc = response.sdesc;
        let ldesc = response.ldesc;
        let status = response.status;

        const result = await data.createLa(codeId, catId, sdesc, ldesc, status);
        res.status(200).send(result);
    } catch(e) {
        res.status(500).send(e);
    }

})
.put(async (req, res) => {
    try {
        let response = req.body;
        for(let i = 0; i < response.length; i++) {
            let temp = response[i];
            await data.updateLa(temp["id"], temp["CodeID"], temp["CategoryID"], temp["SDescription"], temp["LDescription"], temp["Active"]);
        }
        res.status(200).json("Data updated successfully");
    } catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;
