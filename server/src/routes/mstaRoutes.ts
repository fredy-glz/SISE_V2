import {Router} from 'express';
import {msta} from '../controllers/mstaController';

class MSTARoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', msta.getAll);
        this.router.get('/:NUA',msta.getOne);
        this.router.post('/',msta.saveOne);
        this.router.delete('/:NUA',msta.deleteOne);
        this.router.put('/:NUA',msta.updateOne);

    }
}

const mstaRoutes = new MSTARoutes();
export default mstaRoutes.router;