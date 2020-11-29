import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllPost, createPost, editPost, deletePost, getOnePost } from "../controllers/controllers.blog.post.ts";

const router = new Router();

router
  .get("/article", async(ctx) => {
    const result = await getAllPost(ctx);
    ctx.response.body = result;
  })
  .get("/article/:id", async(ctx) => {
    const result = await getOnePost(ctx);
    ctx.response.body = result;
  })
  .post("/article", async(ctx) => {
      const result = await createPost(ctx);
      ctx.response.body = result; 
  })
  .put("/article/:id", async(ctx) => {
      const result = await editPost(ctx);
      ctx.response.body = result;
  })
  .delete("/article/:id", async (ctx) => {
      const result = await deletePost(ctx);
      ctx.response.body = result;
  });

export { router };
