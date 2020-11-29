import { MongoClient } from "https://deno.land/x/mongo@v0.13.0/mod.ts";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient();
client.connectWithUri(url);

export { client }