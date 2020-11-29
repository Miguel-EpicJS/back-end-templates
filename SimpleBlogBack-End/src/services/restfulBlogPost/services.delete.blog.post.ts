import { posts } from "../../db/blog.post.db.ts";

async function deleteBlogPost(id: any) {
  if (id) {
    await posts.deleteOne(
      { _id: { $oid: id} }
    );
    return true;
  } else {
    return false;
  }
}

export { deleteBlogPost };
