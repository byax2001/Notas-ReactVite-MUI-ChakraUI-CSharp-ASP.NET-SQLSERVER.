import React from "react";
import DataTable from "react-data-table-component";
import BasePage from "../../components/BasePage/BasePage";
import { customStyles } from "./components/styleTable";
import { NoDataComponent } from "./components/NoDataComponent";
import { Button } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";

const TableAlumns = () => {
  const data = [
    {
      dni: "123",
      name: "Jose",
      address: "Alvarez",
      age: 20,
      email: "jose@gmail.com",
    },{
      dni: "22123",
      name: "fernande",
      address: "Alvarez",
      age: 50,
      email: "sdee@gmail.com",
      asignatura:"fisica"
    },{
      dni: "2sdf",
      name: "Ale",
      address: "Perez",
      age: 67,
      email: "sdf3g@gmail.com",
      asignatura: "matematica"
    },
    {
      dni: "456",
      name: "Perez Alvarez",
      address: "Agua de la mina",
      age: 30,
      email: "perez@gmail.com",
    },
  ];

  const columns = [
    { name: "DNI", selector: (row) => row.dni, center: true.toString() },
    { name: "Nombre", selector: (row) => row.name, center: true.toString(), sortable: true },
    {
      name: "Dirección",
      selector: (row) => row.address,
      center: true.toString(),
    },
    { name: "Edad", selector: (row) => row.age, center: true.toString() },
    { name: "Email", selector: (row) => row.email, center: true.toString() },
    { name: "Asignatura", selector: (row) => row.asignatura, center: true.toString() },
    { // A esta columna no se le coloca un nombre, ya que se usará para mostrar un botón
      cell: (row) => (
        <Button colorScheme="blue" size="sm">
         <FaEdit/> Editar
        </Button>
      ),
      grow: 0.8, // Hace que la columna crezca o disminuya su tamaño
    },
    { // A esta columna no se le coloca un nombre, ya que se usará para mostrar un botón
      cell: (row) => (
        <Button colorScheme="blue" size="sm">
         <MdDownloadDone/>  Calificar
        </Button>
      ),
      grow: 0.8, // Hace que la columna crezca o disminuya su tamaño
    },
    { // A esta columna no se le coloca un nombre, ya que se usará para mostrar un botón
      cell: (row) => (
        <Button colorScheme="blue" size="sm">
          <MdDelete/>Eliminar
        </Button>
      ),
      grow: 0.8, // Hace que la columna crezca o disminuya su tamaño
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <DataTable
        title="Lista de Alumnos"
        columns={columns}
        data={data}
        customStyles={customStyles}
        noDataComponent={<NoDataComponent/>}
        pagination
        striped //  Habilita el alternar colores de fila de modo que las filas pares e impares tengan diferentes colores en la tabla entre sí
                // además de agregar un color de fondo a la fila que se resalta cuando se pasa el mouse sobre ella
        highlightOnHover
        theme="dark" // Cambia el tema de la tabla a oscuro
      />
    </div>
  );
};

export default function Home() {
  return <BasePage bodyPage={<TableAlumns />} />;
}
