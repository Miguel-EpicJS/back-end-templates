import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "../routes/routes.ts"; 

const app = new Application();


app.use(router.routes())
app.use(router.allowedMethods())
console.log('Working...')
await app.listen("127.0.0.1:8000");
