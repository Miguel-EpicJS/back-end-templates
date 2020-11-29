import { assertEquals, assertNotEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";

Deno.test("API POST", async () => {
  const responsePost = await fetch("http://127.0.0.1:8000/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "example", info: "example", desc: "example", article: "example" }),
  });
  const jsonResponsePost = await responsePost.json();

  assertEquals(jsonResponsePost, true);
});

Deno.test("API GET", async () => {
  const responseGet = await fetch("http://127.0.0.1:8000/article");
  const jsonResponseGet = await responseGet.json();

  assertNotEquals(jsonResponseGet, null);
});

Deno.test("API PUT", async () => {
  let responseGet = await fetch("http://127.0.0.1:8000/article");
  let jsonResponseGet = await responseGet.json();
  const tam = jsonResponseGet.length;
  const responsePut = await fetch(`http://127.0.0.1:8000/article/${jsonResponseGet[tam-1]['_id'].$oid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "example1", info: "example1", desc: "example1", article: "example1" }),
  });
  responseGet = await fetch("http://127.0.0.1:8000/article");
  jsonResponseGet = await responseGet.json();
  const jsonResponsePut = await responsePut.json();
  const alter = (jsonResponseGet[tam-1]["title"] == "example1" && jsonResponseGet[tam-1]["info"] == "example1" && jsonResponseGet[tam-1]["desc"] == "example1" && jsonResponseGet[tam-1]["article"] == "example1") ? true : false;
  assertEquals(alter, true, "Alter failed");
  assertEquals(jsonResponsePut, true, "Alter return false or dont return anything");
})
Deno.test("API DELETE", async () => {
  const responseGet = await fetch("http://127.0.0.1:8000/article");
  const jsonResponseGet = await responseGet.json();
  const tam = jsonResponseGet.length;
  const responseDelete = await fetch(`http://127.0.0.1:8000/article/${jsonResponseGet[tam-1]['_id'].$oid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ any: "any"}),
  });
  const jsonResponseDelete = await responseDelete.json();

  assertEquals(jsonResponseDelete, true);
})
