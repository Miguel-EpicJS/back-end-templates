import { Router } from "https://deno.land/x/oak/mod.ts";
import {createProductController, readProductController, updateProductController, deleteProductController} from "../controllers/product.controllers.ts";

const productRouter = new Router();

productRouter
    .get("/api/products", async(ctx) => {
        const result = await readProductController(ctx);
        ctx.response.body = result;
    })
    .get("/api/products/:id", async(ctx) =>{
        const result = await readProductController(ctx);
        ctx.response.body = result;
    })
    .post("/api/products", async(ctx) => {
        const result = await createProductController(ctx);
        ctx.response.body = result;
    })
    .put("/api/products/:id", async(ctx) => {
        const result = await updateProductController(ctx);
        ctx.response.body = result;
    })
    .delete("/api/products/:id", async(ctx) => {
        const result = await deleteProductController(ctx);
        ctx.response.body = result;
    })

export default productRouter;