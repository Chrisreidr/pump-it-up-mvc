const Pumping = require('../models/Pumping')

module.exports = {
    getPumpingLog: async (req,res)=>{
        console.log(req.body)
        try{
            const startDate = new Date().setHours(0)
            const endDate = new Date().setHours(23,59,59)
            const inputsLoggedToday = await Pumping.find({dateCreated: {$gte: startDate, $lt: endDate}}).lean()
            const datesLoggedToday = inputsLoggedToday[0].dateCreated.toString().slice(0, 15)
            const today = new Date().toString().slice(0, 15)
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
            const totalFlozFed = await Pumping.aggregate([ { 
                $group: { 
                    _id: req.params.id, 
                    total: { 
                        $sum: "$flozFed" 
                    } 
                } 
            } ] )
            // Get inputs for the day
            console.log(inputsLoggedToday[0]);
            // Get dates from inputs created today
            console.log(inputsLoggedToday[0].dateCreated);
            // Date extracted frominputs from today
            console.log(datesLoggedToday);
            // Current day
            console.log(today);
            // Total Floz Fed
            console.log(totalFlozFed[0].total);
            // Total Floz Stored
            console.log(totalFlozStored[0].total); 
            res.render('pumping.ejs', {pumpings: pumpingLog, totalStored: totalFlozStored[0].total, totalFed: totalFlozFed[0].total})
        }catch(err){
            console.log(err)
        }
    },
    totalPumpingLog: async (req,res)=>{
        try {
            console.log('Pumping Log');
            const totalLogs = await Pumping.find()
            res.render('totalPumpingLog.ejs', {totalLogs: totalLogs})
        } catch(err){
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