import {Router} from 'express';
import {medidas} from '../controllers/medidasController';

class MedidasRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', medidas.getAll);
        this.router.get('/:NUA',medidas.getOne);
        this.router.post('/',medidas.saveOne);
        this.router.delete('/:NUA',medidas.deleteOne);
        this.router.put('/:NUA',medidas.updateOne);

    }
}

const medidasRoutes = new MedidasRoutes();
export default medidasRoutes.router;