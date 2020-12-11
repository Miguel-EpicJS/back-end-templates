import {readProductService} from '../../services/product.services.ts';

const readProductController = async (ctx: any) => {
    try {
        const request = readProductService(await ctx.params.id);
        return request;
    } catch (e) {
        return e.message;
    }
} 

export default readProductController;