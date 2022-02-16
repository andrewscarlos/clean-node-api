import { HttpResponse } from "../controllers/interfaces/http";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
