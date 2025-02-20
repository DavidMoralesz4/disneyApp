import { Button, Card, TextField } from "@mui/material";
import createStyle from "./create.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateCharMutation } from "../../redux/services/charApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export interface DataCreate {
  name: string;
  image: string;
  age: number;
  weight: number;
  history: string;
}

export default function CreateChar() {
  const { register, handleSubmit, reset } = useForm<DataCreate>();
  const [createChar] = useCreateCharMutation()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<DataCreate> = async(data) => {
    try {
      await createChar(data).unwrap()
      reset()
      toast.success('Personaje creado con exito!')
      navigate('/characters')
    } catch (error) {
      toast.error('Hubo un problema!');
      console.error(error);
    }
  };

  return (
    <Card className={createStyle.card}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Crea un personaje</h1>
        <p>Investiga sobre tu personaje y crealo aqui.</p>

        <div className={createStyle.inputs}>
          <TextField placeholder="Nombre del personaje" {...register("name")} required/>
          <TextField placeholder="URL de imagen" {...register("image")} required/>
          <TextField placeholder="Ano" {...register("age")} required/>
          <TextField placeholder="Peso" {...register("weight")} required/>
          <TextField placeholder="Resume historia" {...register("history")} required/>
        </div>

        <Button type="submit" color="primary" variant="contained" className={createStyle.btn}>
          Crear
        </Button>
      </form>
    </Card>
  );
}
