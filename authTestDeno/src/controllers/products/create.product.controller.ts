import {createProductService} from '../../services/product.services.ts';

const createProductController = async ( ctx: any ) => {
    try {
        if(ctx.request.hasBody){
            const request = ctx.request.body({ type: 'json' });
            const value = request.value;

            const result =  createProductService(await value);
            return result;
        }else{
            return "We need a body to work";
        }
    } catch (e) {
        return e.message;
    }
}

export default createProductController;