import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import productRoutes from "./routes/product.routes.ts";

const app = new Application();

app.use(oakCors());
app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());

console.log("Runnig on  127.0.0.1:8000")
await app.listen({ port: 8000 })