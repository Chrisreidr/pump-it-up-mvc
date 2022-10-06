module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getQuotes: (req,res)=>{
        res.render('quotes.ejs')
    },
    getPostpartum: (req,res)=>{
        res.render('postpartum.ejs')
    },
    getNewToPumping: (req,res)=>{
        res.render('newToPumping.ejs')
    }
}