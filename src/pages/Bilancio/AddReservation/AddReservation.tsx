import { SubmitHandler, useForm } from "react-hook-form";
import { UiInput } from "../../../UI/UiInput/UiInput";
import { IFormInput } from "./type";
import { Button, Container } from "./style";
import { UiDateInput } from "../../../UI/UiDateInput/UiDateInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddReservation = () => {
  //<------DATA
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>{
    const dataArrivo = new Date(data.dataArrivo).toLocaleDateString("it-IT");
    const dataPartenza = new Date(data.dataPartenza).toLocaleDateString("it-IT");
    const profitto = data.profitto.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(".", ",");
    const commissioni = data.commissioni.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(".", ",");
    const netto = data.profitto - data.commissioni  
    console.log(netto);
    
    

    axios
      .post(
        `https://script.google.com/macros/s/AKfycby4KQP5E8AUiFiZu2bX9tZud50YaOITj-Bo7R8rL0V8VbR5aCh9QQUhLbpUWhLsFhep/exec?dataArrivo=${dataArrivo}&dataPartenza=${dataPartenza}&nominativo=${data.nominativo}&profitto=${profitto}&commissioni=${commissioni}&netto=${netto}`
      )
      .then((reponse) => {
        console.log(reponse);
        navigate("/excelsior-dashboard");
      });
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <UiDateInput
          errors={errors.dataArrivo}
          register={register("dataArrivo", {
            required: true,
            pattern:
              /(?<!\d)(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(?:0[13578]|1[02])31)|(?:(?:0[1,3-9]|1[0-2])(?:29|30)))|(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))0229)|(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:0?[1-9])|(?:1[0-2]))(?:0?[1-9]|1\d|2[0-8]))(?!\d)/,
          })}
          errorMessage={{
            required: "Questo campo è richiesto",
            pattern: "La data non è valida",
          }}
          label="Data Arrivo"
          id="dataArrivo"
        />
        <UiDateInput
          errors={errors.dataPartenza}
          register={register("dataPartenza", {
            required: true,
            pattern:
              /(?<!\d)(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(?:0[13578]|1[02])31)|(?:(?:0[1,3-9]|1[0-2])(?:29|30)))|(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))0229)|(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:0?[1-9])|(?:1[0-2]))(?:0?[1-9]|1\d|2[0-8]))(?!\d)/,
          })}
          errorMessage={{
            required: "Questo campo è richiesto",
            pattern: "La data non è valida",
          }}
          label="Data Partenza"
          id="dataPartenza"
        />
        <UiInput
          type="text"
          errors={errors.nominativo}
          register={register("nominativo", {
            required: true,
          })}
          errorMessage={{
            required: "Questo campo è richiesto",
          }}
          label="Nominativo"
          id="nominativo"
        />
        <UiInput
          type="number"
          errors={errors.profitto}
          register={register("profitto", {
            required: true,
          })}
          errorMessage={{
            required: "Questo campo è richiesto",
          }}
          label="Profitto"
          id="profitto"
        />
        <UiInput
          type="number"
          errors={errors.commissioni}
          register={register("commissioni", {
            required: true,
          })}
          errorMessage={{
            required: "Questo campo è richiesto",
          }}
          label="Commissioni"
          id="commissioni"
        />
      </Container>
      <Button>Add</Button>
    </form>
  );
};
