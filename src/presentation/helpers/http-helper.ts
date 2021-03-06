import { HttpResponse } from "../controllers/interfaces/http-interface";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
