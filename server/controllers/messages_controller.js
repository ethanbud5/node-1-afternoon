var messages = [];
var id = 0;

module.exports = {
    create:(req,res)=>{
        
        messages.push({
            id:id,
            text:req.body.text,
            time:req.body.time,
            name:req.body.name
        })
        id++
        res.status(200).json(messages)
    },
    read:(req,res)=>{
        res.status(200).json(messages)
    },
    update:(req,res)=>{
        let idToUpdate = req.params.id;
        messages.map((message,i)=>{
            if(message.id === +idToUpdate){
                message.text = req.body.text;
            }
        })
        res.status(200).json(messages)
    },
    delete:(req,res)=>{
        let idToDelete = req.params.id;
        messages.map((message,i)=>{
            if(message.id === +idToDelete){
                messages.splice(i,1)
                // console.log(messages[i])
            }
        })
        res.status(200).json(messages)
    }
}