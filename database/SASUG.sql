DROP DATABASE IF EXISTS SASUG;
CREATE DATABASE SASUG;
use SASUG;

CREATE TABLE DivisionesUG(
    Division_Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nombre NVARCHAR(10) NOT NULL
);

CREATE TABLE ProgramasEduUG(
    PE_Id INT NOT NULL AUTO_INCREMENT,
    Division_Id INT REFERENCES DivisionesUG.Division_Id,
    Nombre NVARCHAR(50) NOT NULL,
    PRIMARY KEY(PE_Id,Division_Id)
);

#LLENADO DE LAS DIVISIONES 
INSERT INTO DivisionesUG(Nombre) VALUES("DICIS");
INSERT INTO DivisionesUG(Nombre) VALUES("DAAD");
INSERT INTO DivisionesUG(Nombre) VALUES("DCEA");
INSERT INTO DivisionesUG(Nombre) VALUES("DCNE");
INSERT INTO DivisionesUG(Nombre) VALUES("DCSH");
INSERT INTO DivisionesUG(Nombre) VALUES("DDPG");
INSERT INTO DivisionesUG(Nombre) VALUES("DI");
INSERT INTO DivisionesUG(Nombre) VALUES("Otra");



INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Ing. Sistemas Computacionales");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Ing. Mecánica");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Ing. Mecatrónica");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Ing. Eléctrica");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Ing. Electrónica ");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Lic. Artes Digitales");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(1,"Lic. Gestión Empresarial");

INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(2,"Arquitectura");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(2,"Artes Visuales");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(2,"Artes Escénicas");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(2,"Diseño Gráfico");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(2,"Diseño de Interiores");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(2,"Música y Artes Escénicas");

INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Admin. de la Calidad y la Productividad");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Admin. de Recursos Turísticos");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Comercio Internacional");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Contador Publico");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Economía");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Relaciones Industriales");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(3,"Sistemas de Información Administrativa");

INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(4,"Biología Experimental");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(4,"Ing. Química");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(4,"Matemáticas");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(4,"Química");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(4,"Químico Farmacéutico Bíologo");

INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(5,"Educación");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(5,"Ens. Español como 2 Leng.");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(5,"Ens. del Inglés");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(5,"Filosofía");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(5,"Historia");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(5,"Letras Españolas");

INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(6,"Administración Pública");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(6,"Ciencia Política");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(6,"Derecho");

INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Geografía");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. Ambiental");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. Civil");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. en Geomática");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. en Minas");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. Hidráulica");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. Metalúrgica");
INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(7,"Ing. Geólogo");


INSERT INTO ProgramasEduUG(Division_Id,Nombre) VALUES(8,"Otra");


CREATE TABLE DatosPersonales(
        NUA INT PRIMARY KEY,
        PrimerCont boolean,
        Reinicio boolean,
        Nombres NVARCHAR(45),
        APaterno NVARCHAR(45),
        AMaterno NVARCHAR(45),
        Sexo NVARCHAR(10),
        Edad INT,
        EstadoCivil NVARCHAR(15),
        Telefono NVARCHAR(10),
     #Datos de Nacimiento
        FechaNacimiento date default NULL,
        Estado VARCHAR(50) NOT NULL,
        Municipio VARCHAR(50) NOT NULL,
    #Domicilio de Recidencia
        CalleR NVARCHAR(50),
        ColoniaR NVARCHAR(50),
        NumeroR INT,
    #Domicilio de origen
        CalleO NVARCHAR(50),
        ColoniaO NVARCHAR(50),
        NumeroO INT,
    #Datos Medicos
        ServicioSalud NVARCHAR(40),
        NSS NVARCHAR(20),
    #Datos Academicos
        FechaIngreso date default NULL,
        Periodo NVARCHAR(40),
        Campus NVARCHAR(40),
        Division_Id INT REFERENCES DivisionesUG.Division_Id,
        PE_Id INT REFERENCES ProgramasEduUG.PE_Id,
    #Como se entero del servicio social
        Informacion NVARCHAR(30)NOT NULL,
    #Datos Inicio de sesión
        Correo NVARCHAR(40),
        Contrasena NVARCHAR(40),
        ConfirmarContrasena NVARCHAR(40), 
    #Observaciones
        Observaciones NVARCHAR(200)
     );

    CREATE TABLE ContactoEmergencia(
        NUA INT REFERENCES DatosPersonales.NUA,
        Nombres NVARCHAR(45),
        APaterno NVARCHAR(45),
        AMaterno NVARCHAR(45),
        Telefono NVARCHAR(10),
        Calle NVARCHAR(50),
        Colonia NVARCHAR(50),
        Numero INT,
        PRIMARY KEY(NUA)
    );
