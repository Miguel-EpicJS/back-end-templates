import { posts } from "../../db/blog.post.db.ts";


async function getAllBlogPost() {
  const articles = await posts.find({ title: { $ne: null } });
  return articles;
}


export { getAllBlogPost };
