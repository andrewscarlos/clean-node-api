import { MissingParamError } from "../erros/missing-param-error";
import { badRequest } from "../helpers/http-helper";
import { HttpRequest, HttpResponse } from "./interfaces/http";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requioredFild = ["name", "email", "password"];
    for (const field of requioredFild) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
