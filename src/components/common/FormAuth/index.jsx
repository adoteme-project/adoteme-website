import { Link } from "react-router-dom";
import Input from "../Input";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/formValidations";

const FormAuth = ({
  title,
  subtitle,
  description,
  fields,
  onSubmit,
  buttonLabel,
  linkTo,
  linkLabel,
  linkForgot,
}) => {

  const methods = useForm({ resolver: zodResolver(LoginSchema) });

  const {formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-screen-lg w-2/5 p-16 flex flex-col gap-10 font-nunito"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center font-bold">{title}</h1>
          {subtitle && (
            <h3 className="text-2xl text-center text-cinza">{subtitle}</h3>
          )}
        </div>

        {description && <p>{description}</p>}

        {fields.map((field, index) => (
          <Input
            key={index}
            label={field.label}
            type={field.type}
            error={errors}
            placeholder={field.placeholder}
            name={field.name}
          />
        ))}

        <div className="flex justify-between gap-8">
          <button
            type="submit"
            className="w-full p-3 text-center bg-verde rounded-md font-bold text-branco"
          >
            {buttonLabel}
          </button>
          {linkTo && linkLabel && (
            <Link
              to={linkTo}
              className="w-full p-3 text-center bg-amarelo rounded-md font-bold text-branco"
            >
              {linkLabel}
            </Link>
          )}
        </div>
        {linkForgot && (
          <Link
            to={"/login/redefinir"}
            className="underline text-azul-main font-bold"
          >
            Esqueci a senha
          </Link>
        )}
      </form>
    </FormProvider>
  );
};

export default FormAuth;
