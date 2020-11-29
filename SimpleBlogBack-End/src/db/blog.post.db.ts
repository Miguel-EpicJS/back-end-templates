import { client } from './index.ts'

interface BlogPost
{
    _id: { $oid: string};
    title: string;
    info: string;
    desc: string;
    article: string;
}

const db = client.database("blog");
const posts = db.collection<BlogPost>("posts");

export { posts }