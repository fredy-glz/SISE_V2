import {Router} from 'express';
import {contacto} from '../controllers/contactoController';

class ContactoRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', contacto.getAll);
        this.router.get('/:NUA',contacto.getOne);
        this.router.post('/',contacto.saveOne);
        this.router.delete('/:NUA',contacto.deleteOne);
        this.router.put('/:NUA',contacto.updateOne);

    }
}

const contactoRoutes = new ContactoRoutes();
export default contactoRoutes.router;