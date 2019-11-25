import {Router} from 'express';
import {inter} from '../controllers/interController';

class InterRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', inter.getAll);
        this.router.get('/:NUA',inter.getOne);
        this.router.post('/',inter.saveOne);
        this.router.delete('/:NUA',inter.deleteOne);
        this.router.put('/:NUA',inter.updateOne);

    }
}

const interRoutes = new InterRoutes();
export default interRoutes.router;