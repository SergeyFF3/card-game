import {string} from "yup";


/***
 * @description Обязательное поле
 */
export const isRequired = string().required("Обязательное поле")
