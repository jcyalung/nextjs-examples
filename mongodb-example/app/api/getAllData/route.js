import { MongoClient } from 'mongodb';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI);
    try {
        await client.connect();
        const database = client.db('temporary-storage');
        const collection = database.collection('users');
        const allData = await collection.find({}).toArray();
        return new Response(JSON.stringify({'data': allData}), {status:200,});
    }
    catch (e) {
        console.log(error);
        return new Response(JSON.stringify(e), {status:500,});
    }
    finally {
        await client.close();
    }
}