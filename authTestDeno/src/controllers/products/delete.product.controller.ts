import {deleteProductService} from '../../services/product.services.ts';

const deleteProductController = async (ctx:any) => {
    try {
        if(ctx.params.id){
            const result = deleteProductService(await ctx.params.id);
            return result;
        }else{
            return "We need an id parameter to work";
        }
    } catch (e) {
        return e.message;
    }
}

export default deleteProductController;