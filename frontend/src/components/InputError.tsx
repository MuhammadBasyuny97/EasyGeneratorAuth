import { FieldError } from "react-hook-form";

const InputError = ({ error }: { error: FieldError | undefined }) => {
  return error && <p className="text-red-500">{error.message}</p>;
};

export default InputError;
