import * as yup from "yup";

export const validAmount = yup.object().shape({
  expected_output_amount: yup.number().required("Debe ingresar un monto"),
  concept: yup
    .string()
    .max(140, "La descripción no puede exceder los 140 caracteres")
    .optional(),
});
