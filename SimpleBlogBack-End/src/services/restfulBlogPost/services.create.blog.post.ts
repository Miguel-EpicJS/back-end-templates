import { posts } from "../../db/blog.post.db.ts";

async function createBlogPost(value: any) {
  if(value.title && value.info && value.desc && value.article)
  {
    await posts.insertOne(
      {
        title: value.title,
        info: value.info,
        desc: value.desc,
        article: value.article,
      },
    );
    return true;
  }else
  {
    return false;
  }
}

export { createBlogPost };
