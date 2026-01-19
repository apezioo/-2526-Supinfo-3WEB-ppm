// src/mocks/handlers.ts
import { http, HttpResponse, delay } from "msw";
import mock from "./fixtures/getMock.json";

export const handlers = {
  getMock200: http.get("https://pokeapi.co/api/v2/pokemon/mock", async () => {
    await delay(1000);
    return HttpResponse.json(mock);
  }),
  getMock500: http.get("https://pokeapi.co/api/v2/pokemon/mock", async () => {
    await delay(1000);
    return HttpResponse.json({ error: "message d'erreur" }, { status: 500 });
  }),
};
