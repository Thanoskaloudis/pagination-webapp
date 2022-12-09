const api = "http://nyx.vima.ekt.gr:3000/api";

const headers = {
  Accept: "application/json",
};

export const post = (page: number, itemsPerPage: number, filters: []) =>
  fetch(`${api}/books`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page, itemsPerPage, filters }),
  })
    .then((res) => res.json())
    .then((data) => data.books);