import { Context, Router } from "https://deno.land/x/oak/mod.ts";
import { scheduling }  from "./scheduling.ts";

const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/scheduling", (context) => {
    context.response.body = Array.from(scheduling.values());
  })
  .get("/scheduling/:id", (context) => {
    if (context.params && context.params.id && scheduling.has(context.params.id)) {
      context.response.body = scheduling.get(context.params.id);
    }
  })
  .post("/scheduling", async (context) => {
    const value = await context.request.body({ type: "json" })
    const json = await value.value;
    if(json.id && json.name && json.desc && json.date){
      scheduling.set(json.id, {
        id: json.id,
        date: json.date,
        name: json.name,
        desc: json.desc
      })
      context.response.body = "<h1>Marcado com sucesso, clique <a href='/scheduling'>aqui</a> para ver os agendados</h1>"
    }else{
      context.response.body = "Algo está errado"
    }
  })
  .delete("/scheduling/:id", async (context) => {
    scheduling.delete(`${context.params.id}`)
    context.response.body = "Deletado com sucesso"
  });

export {router};