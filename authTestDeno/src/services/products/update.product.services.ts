import dbProduct from "../../db/products.db.ts";

const updateProductService = async (id:any, data:any) => {
    try {
        if(id && data.title && data.price && data.image && data.desc){
            await dbProduct.updateOne(
                { _id: { $oid: id }},
                { 
                    $set: { 
                        title: data.title,
                        price: data.price,
                        image: data.imageUrl,
                        desc: data.desc,
                     } 
                }
            )
            return true;
        }else{
            return "You're missing some informations";
        }
    } catch (e) {
        return e.message;
    }
}

export default updateProductService;