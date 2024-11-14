-- Creacion de la tabla alumno
-- El identity sirve para que el id se auto incremente en 1 y el 1 sea el valor inicial
CREATE TABLE alumno (
  id int IDENTITY(1,1) primary key,
  dni varchar(8) NOT NULL,
  nombre varchar(255) NOT NULL,
  direccion varchar(255) NOT NULL,
  edad int NOT NULL,
  email varchar(100) NOT NULL
);

-- Creacion de la tabla profesor
CREATE TABLE profesor (
	usuario varchar(255) primary key,
	pass varchar(255) NOT NULL,
	nombre varchar(255) NOT NULL,
	email varchar(255) NOT NULL
);

-- Creacion de la tabla asignatura
CREATE TABLE asignatura (
  id int IDENTITY(1,1) primary key,
  nombre varchar(255) NOT NULL,
  creditos int DEFAULT 0 NOT NULL,
  profesor varchar(255),
  FOREIGN KEY (profesor) REFERENCES profesor(usuario)
);


-- Creacion de la tabla matricula
CREATE TABLE matricula (
  id int IDENTITY(1,1) primary key,
  alumnoId int NOT NULL,
  asignaturaId int NOT NULL,
  FOREIGN KEY (alumnoId) REFERENCES alumno(id),
  FOREIGN KEY (asignaturaId) REFERENCES asignatura(id)
);

-- Creacion de la tabla calificacion
CREATE TABLE calificacion (
  id int IDENTITY(1,1) primary key,
  descripcion varchar(255) NOT NULL,
  nota REAL NOT NULL,
  porcentaje int NOT NULL,
  matriculaId int NOT NULL,
  FOREIGN KEY (matriculaId) REFERENCES matricula(id)
) ;

-- Se usara un ORM para conectar la base de datos sqlserver con una palicacion asp.net core
-- Se usara Entity Framework Core, que es un ORM de Microsoft que permite trabajar con bases de datos relacionales
-- un ORM es un mapeador objeto-relacional, es decir, un programa que se encarga de mapear las tablas de una base de datos relacional a objetos en un lenguaje de programación orientado a objetos
-- parecidos a clases en C# o Java