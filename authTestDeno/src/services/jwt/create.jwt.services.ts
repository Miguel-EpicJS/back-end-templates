import { create } from "https://deno.land/x/djwt@$VERSION/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { dbKey } from "../../db/jwt.db.ts";

const header = {
    alg: "HS512",
    typ: "JWT"
}
const payload = { access: "Access allowed" }

const key = `${v4.generate()}${v4.generate()}`;

const generate = async() => {
    const jwt = await create(header, payload, key);
    await dbKey.insertOne({
        key: key,
    })
    return jwt;
}

export default generate;