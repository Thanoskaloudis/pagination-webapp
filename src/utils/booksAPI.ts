import { IParams } from "./models";

const api = "http://nyx.vima.ekt.gr:3000/api";

const headers = {
  Accept: "application/json",
};

export const post = (params: IParams) =>
  fetch(`${api}/books`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((data) => data);