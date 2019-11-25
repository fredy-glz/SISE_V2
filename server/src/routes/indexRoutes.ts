import {Router} from 'express';
import {dp} from '../controllers/datospController';

class IndexRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', dp.getAll);
        this.router.get('/:NUA',dp.getOne);
        this.router.post('/',dp.saveOne);
        this.router.delete('/:NUA',dp.deleteOne);
        this.router.put('/:NUA',dp.updateOne);

    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;