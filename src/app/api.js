import axios from "axios";
import { LANGUAGE_VERSIONS } from "../app/constant";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourcecode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourcecode,
      },
    ],
  });
  return response.data;
};