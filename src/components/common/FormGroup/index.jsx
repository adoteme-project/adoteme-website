import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Input from "../Input";
import { Controller } from "react-hook-form";

const FormGroup = ({
  title,
  fields = [],
  column = 1,
  radioControl = [],
  register,
  control,
  errors,
  editMode
}) => {
  const gridTemplateColumns = column === 2 ? "1fr 1fr" : "1fr";

  return (
    <div className="max-w-screen-lg w-full px-14 py-8 flex flex-col gap-8 bg-beje shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold">{title}</h1>

      <fieldset disabled={!editMode} className="grid gap-4 w-full" style={{ gridTemplateColumns }}>
        {fields.length > 0 &&
          fields.map((field, index) => (
            <Input
              key={index}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              disabled={field.disabled}
              register={register}
              error={errors}
            />
          ))}

        {radioControl.length > 0 &&
          radioControl.map((radio, index) => (
            <FormControl key={index}>
              <FormLabel>{radio.pergunta}</FormLabel>
              <Controller
                rules={{ required: true }}
                control={control}
                defaultValue=""
                name={radio.name}
                render={({ field }) => {
                  return (
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        control={<Radio />}
                        value={radio.valor1}
                        label={radio.label1}
                      />
                      <FormControlLabel
                        control={<Radio />}
                        value={radio.valor2}
                        label={radio.label2}
                      />
                    </RadioGroup>
                  );
                }}
              />
            </FormControl>
          ))}
      </fieldset>
    </div>
  );
};

export default FormGroup;
