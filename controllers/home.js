module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getNewToPumping: (req,res)=>{
        res.render('newToPumping.ejs')
    }
}