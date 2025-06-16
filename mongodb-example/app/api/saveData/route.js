import { MongoClient } from "mongodb";

export async function POST(req) { 
    const client = new MongoClient(process.env.MONGODB_URI); 
    try { 
        const body = await req.json();
        const { username, password } = body;
        if(!username) { throw Error("Username not defined."); }
        if(!password) { throw Error("Password not defined."); }
        
        await client.connect(); 
        const database = client.db('temporary-storage'); // Choose a name for your database 
        const collection = database.collection('users'); // Choose a name for your collection 
    
    	await collection.insertOne({ username, password }); 
		return new Response(JSON.stringify({"message": "response received."}), {
    		status: 200,
    	});
	} catch (error) {
        console.log(error);
		return new Response(JSON.stringify({error}), {
			status: 500,
		});
    } finally { 
		await client.close(); 
    } 
}
