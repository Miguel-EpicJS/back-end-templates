import { getAllBlogPost } from "../../services/services.blog.post.ts";

const getAllPost = async (ctx: any) => {
  const resp = JSON.stringify(await getAllBlogPost());
  return resp;
};

export { getAllPost };
