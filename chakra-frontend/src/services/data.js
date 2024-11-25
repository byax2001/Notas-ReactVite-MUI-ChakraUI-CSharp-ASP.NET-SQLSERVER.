const url = import.meta.env.VITE_API_CONSUME;

export function login(user,pass) {
  return fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'usuario': user, 'pass': pass}),
  }).then((res) => res.text());
}