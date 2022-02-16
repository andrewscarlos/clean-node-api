import { MissingParamError } from "../erros/missing-param-error";
import { badRequest } from "../helpers/http-helper";
import { ControllerInterface } from "./interfaces/controller-interface";
import { HttpRequest, HttpResponse } from "./interfaces/http-interface";

export class SignUpController implements ControllerInterface {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requioredFild = ["name", "email", "password", "passwordConfirmation"];
    for (const field of requioredFild) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
