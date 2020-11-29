import { posts } from "../../db/blog.post.db.ts";

async function editBlogPost(value: any, id: any) {
  if (value.title && value.info && value.desc && value.article) {
    await posts.updateOne(
      { _id: { $oid: id} },
      {
        $set: {
          title: value.title,
          info: value.info,
          desc: value.desc,
          article: value.article,
        },
      },
    );
    return true;
  } else {
    return false;
  }
}

export { editBlogPost };
