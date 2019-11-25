
import {Router} from 'express';
import {formato} from '../controllers/formatoController';

class FormatoRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', formato.getAll);
        this.router.get('/:NUA',formato.getOne);
        this.router.post('/',formato.saveOne);
        this.router.delete('/:NUA',formato.deleteOne);
        this.router.put('/:NUA',formato.updateOne);

    }
}

const formatoRoutes = new FormatoRoutes();
export default formatoRoutes.router;