const db = require('../database')
const router = require('express').Router()


router.get('/tenData' , (req,res) => {
    var sql = `select * from data limit 10;`
    db.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

router.get(`/paging/:page` , (req,res) => {
    var sql = `select * from data limit 10 offset ${req.params.page*10}`
    db.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

router.get(`/filter` , (req,res) => {

    var name = req.query.name
    var pclass = req.query.pclass
    var sql = ''
    if(name){
        sql = `select * from data where Name like '${name}%'`
    }
    if(pclass){
        sql = `select * from data where Pclass = '${pclass}'`
    }
    if(pclass && name){
        sql = `select * 
               from data 
               where Name like '${name}%' and 
               Pclass = '${pclass}'`
    }

    db.query(sql , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})

module.exports = router