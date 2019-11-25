import {Router} from 'express';
import {dieta} from '../controllers/dietaController';

class DietaRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', dieta.getAll);
        this.router.get('/:NUA',dieta.getOne);
        this.router.post('/',dieta.saveOne);
        this.router.delete('/:NUA',dieta.deleteOne);
        this.router.put('/:NUA',dieta.updateOne);

    }
}

const dietaRoutes = new DietaRoutes();
export default dietaRoutes.router;