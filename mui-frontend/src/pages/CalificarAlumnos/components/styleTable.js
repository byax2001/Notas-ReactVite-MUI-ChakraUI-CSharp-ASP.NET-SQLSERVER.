
export const customStyles = {
    noData: { // Apartado de no datos, donde se muestra un mensaje cuando no hay datos en la tabla
		style: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#454546',
		},
	},
    header: { // Apartado de la cabecera de la tabla, donde se encuentra el título de esta
        
		style: {
            justifyContent: 'center',
			fontSize: '22px',
			color: 'white',
			backgroundColor:"#3a3a3a",
			minHeight: '56px',
			paddingLeft: '16px',
			paddingRight: '8px',
		},
	},
    rows: {
        //para variar colores entre fila y fila 
        //stripedstyle fila 1
        //style fila 2
        // Para que el stripedStyle funcione, se debe habilitar la propiedad "striped" en el componente DataTable
        style: {
            backgroundColor:"#454546",
        },
        stripedStyle: {
			backgroundColor: "#3c3c3c",
		},
    },
    headCells: { //Celdas donde se encuentran los nombres de las columnas
        style: {
            backgroundColor:"#3a3a3a",
            
        },
    },
   
    pagination: {
		style: {
			fontSize: '13px', //Tamaño de la fuente del apartado de paginación
            color:'white', //Color de la fuente del apartado de paginación
			minHeight: '56px', //Altura del apartado de paginación
			backgroundColor: '#3a3a3a', //Color de fondo del apartado de paginación
			borderTopStyle: 'solid',
			borderTopWidth: '1px', //Grosor del borde superior del apartado de paginación
			borderTopColor: 'd2d2d2', //Color del borde superior del apartado de paginación
		}}
};

