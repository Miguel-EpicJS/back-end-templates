import { createBlogPost } from "../../services/services.blog.post.ts";

const createPost = async (ctx: any) => {
  if (ctx.request.hasBody) {
    const result = await ctx.request.body({ type: 'json' });
    const resp = createBlogPost(await result.value);
    return resp;
  }
  return false;
};

export { createPost }