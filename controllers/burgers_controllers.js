var express = require("express");
var router = express.Router();

var burger = require("../models/burger");
////////////////////////////////////////////
//             API ROUTES                 //
////////////////////////////////////////////

// router.get("/all", function(req,res) {
//     burger.all(function(result) {
//         res.json(result);
//     })
// })

router.post("/create/burger", function(req,res) {

    burger.create(["burger_name", "devoured"], [req.body.burgerInput, false], function(result) {
        res.redirect("/");
    })
})

router.put("/put/burger/:id", function(req,res) {
    var condition = "id=" + req.params.id;
    var objColVals = {devoured: true};
    burger.update(objColVals, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } 
          else {
            res.status(200).end();
       //res.redirect("/");
    }
})
})

// burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
//     if (result.changedRows == 0) {
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     };
// });


////////////////////////////////////////////
//             API ROUTES                 //
////////////////////////////////////////////

router.get("/", function(req,res) {
    burger.all(function(result) {

        res.render("index", {burgers:result})
    })
})
//////////////////////////////
module.exports = router;