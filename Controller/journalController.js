const journals = require('../model/journalModel')

exports.addJournalController = async(req,res)=>{
    const userId = req.payload
    const { content , date} = req.body

    console.log(userId,content,date);
    try {
        const newJournal = new journals({
            userId, content, date
        })
        await newJournal.save()
        res.status(231).json('Success!')
    } catch (error) {
        res.status(431).json('Couldnt add Entry at the moment! Try again after some time')
    }
}

exports.getJournalController= async(req,res)=>{
    const userId = req.payload
    try {
        const allJournal = await journals.find({userId}).sort({date:-1})
        res.status(211).json(allJournal)

    } catch (error) {
        res.status(430).json(error)
    }
}

exports.getSingleJournal = async(req,res)=>{
    const {id} = req.params
    // console.log(id);

    try {
        const js = await journals.findOne({_id:id}) 

        if(js){
            
            res.status(211).json(js)
        }else{
            
            res.status(431).json('errorwhile fetching data!')
        }
    } catch (error) {
        res.status(431).json(error)
    }
}

exports.deleteJournal = async(req,res)=>{
    const {id} = req.params
    try {
        await journals.findByIdAndDelete({_id:id})
        res.status(201).json('Deleted!')
    } catch (error) {
        res.status(431),json(error)
        
    }
}