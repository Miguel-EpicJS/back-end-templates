import dbProduct from "../../db/products.db.ts";

const deleteProductService = async (id: string) => {
    try {
        if(id){
            await dbProduct.deleteOne({ _id: { $oid: id } })
            return true;
        }else{
            return "Please, submit an id";
        }
    } catch (e) {
        return e.message;
    }
}

export default deleteProductService;