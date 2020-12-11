import {updateProductService} from '../../services/product.services.ts';

const updateProductController = async ( ctx: any ) => {
    try {
        if(ctx.params.id && ctx.request.hasBody){
            const request = ctx.request.body({ type: 'json' });
            const value = request.value;
            const result = updateProductService(await ctx.params.id, await value);
            return result;
        }else{
            return "You're missing some informations";
        }
    } catch (e) {
        return e.message;
    }
}

export default updateProductController;