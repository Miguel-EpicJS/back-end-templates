import dbProduct from "../../db/products.db.ts";

const readProductService = async (id: any) => {
    try {
        if(id){
            const result = await dbProduct.findOne({ _id: {$oid: id} });
            return result;
        }else{
            const result = await dbProduct.find({ title: { $ne: null } });
            return result;
        }
    } catch (e) {
        return e.message;
    }
}

export default readProductService;