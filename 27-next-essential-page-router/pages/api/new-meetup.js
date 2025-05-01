// /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req,res){
    if(req.method==='POST'){
        console.log('POST');
        const data = req.body;
        console.log(data);
        const {title,image,address,description}=data
        let client=await MongoClient.connect('mongodb://localhost:27017/first')
        const db=client.db()
        const meetupsCollection=db.collection('meetup')
        let result=await meetupsCollection.insertOne(data)
        console.log(result);
        client.close()
        res.status(201).json({message:'Meetup inserted!'})
    }
}
export default handler