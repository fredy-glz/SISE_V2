import {Router} from 'express';
import {saca} from '../controllers/sacaController';

class SacaRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', saca.getAll);
        this.router.get('/:NUA',saca.getOne);
        this.router.post('/',saca.saveOne);
        this.router.delete('/:NUA',saca.deleteOne);
        this.router.put('/:NUA',saca.updateOne);

    }
}

const sacaRoutes = new SacaRoutes();
export default sacaRoutes.router;