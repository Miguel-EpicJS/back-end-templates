import { getOneBlogPost } from "../../services/services.blog.post.ts";

const getOnePost = async (ctx: any) => {
  const resp = JSON.stringify(await getOneBlogPost(ctx.params.id));
  return resp;
};

export { getOnePost };
