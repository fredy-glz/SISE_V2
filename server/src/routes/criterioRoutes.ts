import {Router} from 'express';
import {criterio} from '../controllers/criterioController';

class CriterioRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', criterio.getAll);
        this.router.get('/:NUA',criterio.getOne);
        this.router.post('/',criterio.saveOne);
        this.router.delete('/:NUA',criterio.deleteOne);
        this.router.put('/:NUA',criterio.updateOne);

    }
}

const criterioRoutes = new CriterioRoutes();
export default criterioRoutes.router;