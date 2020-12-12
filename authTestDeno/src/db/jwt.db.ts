import client from './db.ts'

interface JWTKey{
    _id: { $oid: string };
    key: string;
}

const db = client.database('products');
const dbKey = db.collection<JWTKey>('key');

export default dbKey;