import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/users.interfaces";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required("missing name field"),
  email: yup.string().email("invalid e-mail").required("missing email field"),
  password: yup.string().required("missing password field"),
  isAdm: yup.boolean().required(),
});

export default userSchema;
