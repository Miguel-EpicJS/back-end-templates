import { assert } from "https://deno.land/std@0.73.0/_util/assert.ts";
import { assertArrayContains, assertEquals, assertNotEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";

Deno.test("Testing POST operations", async () => {
    const url = "http://127.0.0.1:8000/api/products";
    const data = {title: "test", price: "test", image: "test", desc: "test"};
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((resp) => resp.json())

    assertEquals(result, true);
});

Deno.test("Testing GET operations", async () => {
    const url = "http://127.0.0.1:8000/api/products";
    const result = await fetch(url)
    assertNotEquals(result, null);
    assertNotEquals(result.json(), undefined);
})

Deno.test("Testing PUT operations", async () => {
    let url = "http://127.0.0.1:8000/api/products";
    let products = await fetch(url).then((resp) => resp.json());

    url = `${url}/${products[products.length-1]._id.$oid}`
    const data = {title: "test1", price: "test1", image: "test1", desc: "test1"};
    const result = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((resp) => resp.json());

    products = await fetch(url).then((resp) => resp.json());
    assertEquals(result, true);
})

Deno.test("Testing DELETE operations", async () => {
    let url = "http://127.0.0.1:8000/api/products";
    let products = await fetch(url).then((resp) => resp.json());

    url = `${url}/${products[products.length-1]._id.$oid}`
    const result = await fetch(url, {
        method: 'DELETE',
    }).then((resp) => resp.json());


    assertEquals(result, true);
})