const db = require('../database')
const router = require('express').Router()

router.get('/allData' , (req,res) => {
    var sql = `select PassengerId, Survived, Pclass,Name,Sex,Age,Fare 
    from train;`
    
    db.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

router.get('/pclass' , (req,res) => {
    var sql = `select Pclass from train group by Pclass order by Pclass;`

    db.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

module.exports = router