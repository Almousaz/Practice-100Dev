const TaskFollow = require('../models/TaskFollow')

module.exports = {
    gettofollow: async (req,res)=>{
        console.log(req.user)
        try{
            const tofollowItems = await TaskFollow.find({userId:req.user.id})
            const itemsLeft = await TaskFollow.countDocuments({userId:req.user.id,completed: false})
            res.render('tofollow.ejs', {tofollows: tofollowItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createtofollow: async (req, res)=>{
        try{
            await TaskFollow.create({tofollow: req.body.tofollowItem, completed: false, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/tofollow')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await TaskFollow.findOneAndUpdate({_id:req.body.tofollowIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await TaskFollow.findOneAndUpdate({_id:req.body.tofollowIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTofollow: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await TaskFollow.findOneAndDelete({_id:req.body.tofollowIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    