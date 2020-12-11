import dbProduct from "../../db/products.db.ts";

const createProductService = async(data: any) => {
    try{
        if(data.title && data.price && data.image && data.desc){
            await dbProduct.insertOne({
                title: data.title,
                price: data.price,
                image: data.imageUrl,
                desc: data.desc,
            });
            return true;
        }
        return "You miss some information";
    }catch(e){
        return e.message;
    }
}

export default createProductService;