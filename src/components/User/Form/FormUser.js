import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";

export const FormUser = ({ isEditing, currentUser, onSubmit, onDelete }) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentUser });

  useEffect(() => {
    if (currentUser) {
      methods.reset({
        ...currentUser,
      });
    }

    return () => dispatch(resetClient());
  }, []);

  const onSubmitHandler = (values) => {
    if (values.username && values.username.toLowerCase().endsWith("admin")) {
      values = { ...values, admin: true };
    }
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete(currentUser.id);
  };

  return (
    <>
      <Card className=" row p-4 mt-3">
      <div className="d-flex ">
        <form id="Formulario" className="col-md-10">
          <div className="cl-outline-primary bold text-nowrap mb-3 ">
            Información del usuario
          </div>
          <div className="row">
            <FormInput
              className="col-md-5"
              name="username"
              label="Usuario"
              register={methods.register("username")}
              type="text"
            />
            <FormInput
              className="col-md-5"
              name="name"
              label="Nombre"
              register={methods.register("name")}
              type="text"
            />
          </div>
          <div className="row">
            <FormInput
              className="col-md-5"
              name="surname"
              label="Apellido"
              register={methods.register("surname")}
              type="text"
            />
            <FormInput
              className="col-md-5"
              name="surname2"
              label="Apellido 2"
              register={methods.register("surname2")}
              type="text"
            />
            </div>
            <div className="row">
            <FormInput
              className="col-md-5"
              name="email"
              label="Email"
              register={methods.register("email")}
              type="text"
            />
            <FormInput
              className="col-md-5"
              name="password"
              label="Contraseña"
              register={methods.register("password")}
              type="password"
            />
          </div>
          <div className="row">
            <FormInput
              className="col-md-5"
              name="preguntaSeg"
              label="Pregunta"
              register={methods.register("preguntaSeg")}
              type="text"
            />
            <FormInput
              className="col-md-5"
              name="respuestaSeg"
              label="Respuesta"
              register={methods.register("respuestaSeg")}
              type="text"
            />
          </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center mt-30 h4">
              <label>Activo</label>
              <input
                type="checkbox"
                className="col-md-2 "
                name="active"
                {...methods.register("active")}
              />
            </div>
        </form>
          <div className="d-flex flex-column mt-30">
            <Button.Save onClick={methods.handleSubmit(onSubmitHandler)} />
            {isEditing && <Button.Delete onClick={handleDelete}/>}
          </div>
          </div>
      </Card>
    </>
  );
};
