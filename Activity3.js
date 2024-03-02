const{MongoClient}=require('mongodb');

const client=new MongoClient('mongodb://127.0.0.1:27017');

async function main()
{
    await client.connect();
    console.log('server connected');

    const db=client.db("meghana");
    console.log('database connected');
    const collection=db.collection('empinfo');
    console.log('collection connected');
    const result=await collection.insertOne({"name":"mad","age":"16"});
    console.log(result);
    return 'done';
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());