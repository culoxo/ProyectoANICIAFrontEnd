import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";

export const FormClient = ({
  isEditing,
  currentClient,
  onSubmit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  console.log(currentClient);
  const methods = useForm({ defaultValues: currentClient });

  useEffect(() => {
    if (currentClient) {
      methods.reset({
        ...currentClient,
      });
    }

    return () => dispatch(resetClient());
  }, []);

  const onSubmitHandler = (values) => {
    onSubmit(values);
  };

  const deleteHandler = () => {
    onDelete(currentClient.id);
  };

  return (
    <>
      <Card className="p-4 mt-3">
        <div className="d-flex ">
          <form className="col-md-10">
            <div className="cl-outline-primary bold text-nowrap mb-3">
              Información del Cliente
            </div>
            <div className="row">
              <FormInput
                className="col-md-4"
                name="nombre"
                label="Nombre"
                register={methods.register("nombre")}
                type="text"
              />
              <FormInput
                className="col-md-4"
                name="direccion"
                label="Dirección"
                register={methods.register("direccion")}
                type="text"
              />
              <FormInput
                className="col-md-4"
                name="email"
                label="Email"
                register={methods.register("email")}
                type="text"
              />
              <FormInput
                className="col-md-4"
                name="telefono"
                label="Teléfono"
                register={methods.register("telefono")}
                type="text"
              />
              <div className="col-md-4 d-flex align-items-center justify-content-center h4">
                <label>Activo</label>
                <input
                  type="checkbox"
                  className="col-md-2 "
                  name="active"
                  {...methods.register("active")}
                />
              </div>
            </div>
          </form>
          <div className="d-flex flex-column mt-2">
            <Button.Save onClick={methods.handleSubmit(onSubmitHandler)} />
            {isEditing && <Button.Delete onClick={deleteHandler}/>}
          </div>
        </div>
      </Card>
    </>
  );
};
