const Pumping = require('../models/Pumping')

module.exports = {
    getPumpingLog: async (req,res)=>{
        console.log(req.body)
        try{
            const pumpingLog = await Pumping.find()
            // const pumpingsToday = await Pumping.find({userId: req.params.id, dateCreated: {$gt: currentTimestamp - 86400000 }})
            const totalFlozStored = await Pumping.aggregate([ { 
                $group: { 
                    _id: req.params.id, 
                    total: { 
                        $sum: "$flozStored" 
                    } 
                } 
            } ] )
            console.log(totalFlozStored[0].total); // shows correct value of 26
            res.render('pumping.ejs', {pumpings: pumpingLog, total: totalFlozStored[0].total})
        }catch(err){
            console.log(err)
        }
    },
    createLog: async (req, res)=>{
        try{
            await Pumping.create({flozFed: req.body.flozFed, timeFed: req.body.timeFed, flozStored: req.body.flozStored, userId: req.user.id})
            console.log(req.body)
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
            console.log(err)
            res.redirect("/pumping");
        }
    }
}  