const {Feed} = require("../models/feed")


const getHomePage = (req,res) =>{
       Feed.find()
       .then(result =>
          res.render("index",{result}))
       .catch(err =>console.log(err))
};


const addNewMessage=(req,res)=>{
    if(req.method ==="GET"){
        res.render("addMessage",{err:false})
    }
    if(req.method ==="POST"){
       const feed = new Feed(req.body)
       feed.save()
            .then(result=>res.redirect('/feed'))
            .catch(err =>res.render('addMessage',{err:err.errors}))
    }

}

const showOneMsg = (req,res)=>{
    Feed.findById({_id:req.params.id})
        .then(result=>{
            res.render('showOneMsg',{result})})
        .catch(err=>console.log(err))
}

const updateOneMessage = (req,res)=>{
      if(req.method ==="GET"){
         Feed.findById({_id:req.params.id})
        .then(result=>{
        console.log(result)
            res.render('edit-post',{result})})
        .catch(err=>console.log(err))
    }
      if(req.method ==="POST"){
         Feed.findByIdAndUpdate({_id: req.params.id})
        .then(result=>{
            result.name = req.body.name
            result.message = req.body.message
            result.save()
            .then(()=>
            res.redirect('/feed'))
            .catch(err=>console.log(err))
    }
           )
    .catch(err=>console.log(err))

    }
}
const deleteOnePost =(req,res)=>{
     Feed.findByIdAndDelete({_id: req.params.id})
        .then(result=>
            res.redirect('/feed'))
        .catch(err=>console.log(err))
}
module.exports = {
    getHomePage,
    addNewMessage,
    showOneMsg,
    updateOneMessage,
    deleteOnePost

}