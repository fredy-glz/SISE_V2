import {Router} from 'express';
import {pato} from '../controllers/patologiaController';

class PatoRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', pato.getAll);
        this.router.get('/:NUA',pato.getOne);
        this.router.post('/',pato.saveOne);
        this.router.delete('/:NUA',pato.deleteOne);
        this.router.put('/:NUA',pato.updateOne);

    }
}

const patoRoutes = new PatoRoutes();
export default patoRoutes.router;