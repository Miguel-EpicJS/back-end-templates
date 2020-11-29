import { posts } from "../../db/blog.post.db.ts";

async function getOneBlogPost(id: any) {
  const articles = await posts.findOne({ _id: { $oid: id } });
  return articles;
}

export { getOneBlogPost };
