const Pumping = require('../models/Pumping')

module.exports = {
    getPumpingLog: async (req,res)=>{
        console.log(req.body)
        try{
            const pumpingLog = await Pumping.find()
            const totalFloz = await Pumping.countDocuments({userId:req.user.id,completed: false})
            res.render('pumping.ejs', {pumpings: pumpingLog})
        }catch(err){
            console.log(err)
        }
    },
    createLog: async (req, res)=>{
        try{
            await Pumping.create({flozFed: req.body.flozFed, timeFed: req.body.timeFed, flozStored: req.body.flozStored, userId: req.user.id})
            console.log('Pumping has been added!')
            res.redirect('/pumping')
        }catch(err){
            console.log(err)
        }
    },
    deleteLog: async (req, res)=>{
        console.log(req.params.id)
        try{
            await Pumping.remove({_id:req.params.id})
            console.log('Deleted Pumping')
            res.redirect("/pumping");
        }catch(err){
            console.log(err, 'pumping')
            res.redirect("/pumping");
        }
    }
}  