import { verify } from "https://deno.land/x/djwt@v2.0/mod.ts"
import dbKey from "../../db/jwt.db.ts";


const check = async(jwt: string) => {
    const keys = await dbKey.find({ key: { $ne: null }});
    keys.forEach((key:any) => {
        try {
            const result = verify(jwt, key, "HS512")
            return result;
        } catch (e) {
            return false;
        }
    });
}

export default check;