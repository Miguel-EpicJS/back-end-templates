import client from './db.ts'

interface Products{
    _id: { $oid: string };
    title: string;
    price: string;
    image: string;
    desc: string;
}

const db = client.database('products');
const dbProduct = db.collection<Products>('products');

export default dbProduct;