const url = import.meta.env.VITE_API_CONSUME;

// LOGIN
export function login(user, pass) {
  try {
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario: user, pass: pass }),
    }).then((res) => res.json());
  } catch (e) {
    alert(e);
    return "no existe";
  }
}

//HOME
export function getAlumnosProfesor(token) {
  try {
    return fetch(`${url}/alumnosP`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (e) {
    alert(e);
    return [];
  }
}

export function deleteAlumno(id) {
  let token = sessionStorage.getItem("token");
  try {
    return fetch(`${url}/alumno?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => res.text());
  } catch (e) {
    alert(e);
    return false;
  }
}

// NUEVO ALUMNO
  // OBTENER TODAS LAS ASIGNATURAS (MATERIAS) QUE TIENE UN PROFESOR
export function getAsignaturas(token) {
  try {
    return fetch(`${url}/asign`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (e) {
    alert(e);
    return [];
  }
} 
// REGISTRAR ALUMNO
export function matricularAlumno(dni, nombre, dir, edad, email, asign, token) {
  try {
    return fetch(`${url}/matricular?idasignature=${asign}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      //Es importante agregar los nombres de los campos que se van a enviar al backend y que coincidan con los del backend
      body: JSON.stringify({ dni:dni, nombre:nombre, direccion:dir, edad:edad, email:email})
    }).then((res) => res.text());
  } catch (e) {
    alert(e);
    return false;
  }
}

// EDITAR ALUMNO
  //INFORMACIÓN DE UN ALUMNO
export function getAlumno(id) {
  let token = sessionStorage.getItem("token");
  try {
    return fetch(`${url}/infoalumno?id=${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
  catch (e) {
    alert(e);
    return [];
  }
}

  //ACTUALIZAR ALUMNO
export function actualizarAlumno(alumno, token) {
  try {
    return fetch(`${url}/editarAlumno`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alumno)
    }).then((res) => res.text());
  } catch (e) {
    alert(e);
    return false;
  }
}

// CALIFICAR ALUMNO
  //OBTENER LAS CALIFICACIONES DE UN ALUMNO
export function getCalificaciones(idmatricula){
  let token = sessionStorage.getItem("token");
  try {
    return fetch(`${url}/calificaciones?idmatricula=${idmatricula}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (e) {
    alert(e);
    return [];
  }
}

  //AGREGAR CALIFICACIÓN
export function addCalificacion(calificacion){
  let token = sessionStorage.getItem("token");
  try {
    return fetch(`${url}/calificaciones`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calificacion)
    }).then((res) => res.text());
  }catch(e){
    alert(e);
    return false;
  }

}
  //ELIMINAR CALIFICACIÓN
export function deleteCalificacion(id){
  let token = sessionStorage.getItem("token");
  try {
    return fetch(`${url}/calificaciones?id=${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.text());
  } catch (e) {
    alert(e);
    return false;
  }
}