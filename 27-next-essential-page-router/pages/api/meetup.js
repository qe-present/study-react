import {MongoClient} from 'mongodb'

async function handler(req,res){
    if(req.method==='GET'){
        const client=await MongoClient.connect('mongodb://localhost:27017/first')
        const db=client.db()
        const meetupsCollection=db.collection('meetup')
        const meetups=await meetupsCollection.find({}).toArray()
        client.close()
        res.status(200).json(meetups)
    }
}   
export default handler
