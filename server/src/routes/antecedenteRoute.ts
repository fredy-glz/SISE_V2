import {Router} from 'express';
import {ant} from '../controllers/antecedenteController';

class AntRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', ant.getAll);
        this.router.get('/:NUA',ant.getOne);
        this.router.post('/',ant.saveOne);
        this.router.delete('/:NUA',ant.deleteOne);
        this.router.put('/:NUA',ant.updateOne);

    }
}

const antRoutes = new AntRoutes();
export default antRoutes.router;