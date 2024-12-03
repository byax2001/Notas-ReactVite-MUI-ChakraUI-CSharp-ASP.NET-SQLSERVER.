const url = import.meta.env.VITE_API_CONSUME;

export function login(user, pass) {
  try {
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario: user, pass: pass }),
    }).then((res) => res.text());
  } catch (e) {
    alert(e);
    return "no existe";
  }
}

export function getAlumnosProfesor(user) {
  try {
    return fetch(`${url}/alumnosP?usuario=${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (e) {
    alert(e);
    return [];
  }
}

export function deleteAlumno(id) {
  try {
    return fetch(`${url}/alumno?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.text());
  } catch (e) {
    alert(e);
    return false;
  }
}
