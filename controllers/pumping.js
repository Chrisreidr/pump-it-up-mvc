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
            console.log(req.body);
            await Pumping.create({flozFed: req.body.flozFed, timeFed: req.body.timeFed, flozStored: req.body.flozStored, userId: req.user.id})
            console.log('Pumping has been added!')
            res.redirect('/pumping')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Pumping.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Pumping.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteLog: async (req, res)=>{
        console.log(req.el)
        try{
            await Pumping.findOneAndDelete({_id:req.el.id})
            console.log('Deleted Pumping')
            console.log(req.body)
            res.redirect("/pumping");
        }catch(err){
            console.log(err)
            res.redirect("/pumping");
        }
    }
}    