import { Axios } from "axios";
import * as Api from "../config";

export type Extra = {
  client: Axios;
  api: typeof Api;
};
