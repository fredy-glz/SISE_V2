import {Router} from 'express';
import {consumo} from '../controllers/consumoController';

class ConsumoRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', consumo.getAll);
        this.router.get('/:NUA',consumo.getOne);
        this.router.post('/',consumo.saveOne);
        this.router.delete('/:NUA',consumo.deleteOne);
        this.router.put('/:NUA',consumo.updateOne);

    }
}

const consumoRoutes = new ConsumoRoutes();
export default consumoRoutes.router;