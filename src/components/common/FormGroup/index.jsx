import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Input from "../Input";

const FormGroup = ({ title, fields = [], column = 1, radioControl = [] }) => {
  const gridTemplateColumns = column === 2 ? "1fr 1fr" : "1fr";

  return (
    <form className="max-w-screen-lg w-full px-14 py-8 flex flex-col gap-8 bg-beje shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="grid gap-4 w-full" style={{ gridTemplateColumns }}>
        {fields.length > 0 &&
          fields.map((field, index) => (
            <Input
              key={index}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}

        {radioControl.length > 0 &&
          radioControl.map((radio, index) => (
            <FormControl key={index}>
              <FormLabel>{radio.pergunta}</FormLabel>
              <RadioGroup row>
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
            </FormControl>
          ))}
      </div>
    </form>
  );
};

export default FormGroup;
