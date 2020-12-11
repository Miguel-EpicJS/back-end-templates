import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient();
client.connectWithUri(url);

export default  client;