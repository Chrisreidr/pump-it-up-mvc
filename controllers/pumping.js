const Pumping = require('../models/Pumping')

module.exports = {
    getPumpingLog: async (req,res)=>{
        console.log(req.body)
        try{
            const pumpingLog = await Pumping.find({userId:req.user.id})
            // const itemsLeft = await Pumping.countDocuments({userId:req.user.id,completed: false})
            res.render('pumping.ejs', {flozCollection: pumpingLog, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createLog: async (req, res)=>{
        try{
            console.log(req.body);
            await Pumping.create({flozFed: req.body.flozFed, timeFed: req.body.timeFed, userId: req.user.id})
            console.log('Pumping has been added!')
            res.redirect('/flozCollection')
        }catch(err){
            console.log(err)
        }
    }
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
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Pumping.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Pumping')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    