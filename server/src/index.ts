import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import diviRoutes from './routes/divisionRoutes';
import proeduRoutes from './routes/proeduRoutes';
import contactoRoutes from './routes/contactoRoutes';
import patoRoutes from './routes/patologiaRoutes';
import habitoRoutes from './routes/habitoRoutes';
import ejercicioRoutes from './routes/ejercicioRoutes';
import criterioRoutes from './routes/criterioRoutes';
import sacaRoutes from './routes/sacaRoutes';
import mstaRoutes from './routes/mstaRoutes';
import antRoutes from './routes/antecedenteRoute';
import examenRoutes from './routes/examenRoute';
import medicaRoutes from './routes/historiaMRoutes';
import medicaMNRoutes from './routes/historiaMNRoutes';
import consumoRoutes from './routes/consumoRoutes';
import dietaRoutes from './routes/dietaRoutes';
import medidasRoutes from './routes/medidasRoutes';
import interRoutes from './routes/interRoutes';
import DMERoutes from './routes/dmeRoutes';
import formatoRoutes from './routes/formatoRoutes';
import morgan from 'morgan';
import cors from 'cors';


class Server {
   public app:Application;
    constructor(){
            this.app=express();
            this.config();
            this.routes();

    }
    config(): void{
            this.app.set('port',process.env.PORT||3000);
            this.app.use(morgan('dev'));
            this.app.use(cors());
            this.app.use(express.json());
            this.app.use(express.urlencoded({extended: false}));

    }

    routes(): void{
        this.app.use('/nutricion/dp',indexRoutes);
        this.app.use('/nutricion/division',diviRoutes);
        this.app.use('/nutricion/proedu',proeduRoutes);
        this.app.use('/nutricion/contacto',contactoRoutes);
        this.app.use('/nutricion/patologia',patoRoutes);
        this.app.use('/nutricion/habito',habitoRoutes);
        this.app.use('/nutricion/ejercicio',ejercicioRoutes);
        this.app.use('/nutricion/criterio',criterioRoutes);
        this.app.use('/nutricion/saca',sacaRoutes);
        this.app.use('/nutricion/msta',mstaRoutes);
        this.app.use('/nutricion/antecedente',antRoutes);
        this.app.use('/nutricion/examen',examenRoutes);
        this.app.use('/nutricion/hmedica',medicaRoutes);
        this.app.use('/nutricion/hmedicamn',medicaRoutes);
        this.app.use('/nutricion/consumo',consumoRoutes);
        this.app.use('/nutricion/dieta',dietaRoutes);
        this.app.use('/nutricion/medidas',medidasRoutes);
        this.app.use('/nutricion/inter',interRoutes);
         this.app.use('/nutricion/dme',DMERoutes);
         this.app.use('/nutricion/formato',formatoRoutes);


    }

    start(): void{

        this.app.listen(this.app.get('port'), () =>{

                console.log('Server on port', this.app.get('port'));

        });
    }
}

const server = new Server();
server.start();