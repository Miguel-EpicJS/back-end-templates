import { deleteBlogPost } from "../../services/services.blog.post.ts";

const deletePost = async (ctx: any) => {
  if (ctx.request.hasBody) {
    const resp = deleteBlogPost(ctx.params.id);
    return resp;
  }
};

export { deletePost }