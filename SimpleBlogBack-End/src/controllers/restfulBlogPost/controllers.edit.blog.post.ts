import { editBlogPost } from "../../services/services.blog.post.ts";

const editPost = async (ctx: any) => {
  if (ctx.request.hasBody) {
    const result = await ctx.request.body({ type: 'json' });
    const resp = editBlogPost(await result.value, ctx.params.id);
    return resp;
  }
};

export { editPost }