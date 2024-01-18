import React, { useEffect, useState } from 'react';
import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";

// ... (importaciones y otros códigos)

export const FormClient = ({
  isEditing,
  currentClient,
  onSubmit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentClient });
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  useEffect(() => {
    if (currentClient) {
      methods.reset({
        ...currentClient,
      });
    }

    return () => dispatch(resetClient());
  }, [currentClient, dispatch, methods]);

  useEffect(() => {
    // Verificar si los campos requeridos tienen algún valor
    console.log("Verificando número de teléfono...");
    const requiredFields = ["nombre", "direccion", "email", "telefono"];
    const allFieldsFilled = requiredFields.every(
      (field) => !!methods.getValues(field)
    );

    // Verificar el número de teléfono
    const telefonoValue = methods.getValues("telefono");
    const isTelefonoValid =
      (telefonoValue.startsWith("6") || telefonoValue.startsWith("9")) &&
      telefonoValue.length === 9;

    setIsSaveButtonEnabled(allFieldsFilled && isTelefonoValid);
    console.log("isSaveButtonEnabled:", isSaveButtonEnabled);

  }, [methods.watch()]);

  const onSubmitHandler = (values) => {
    onSubmit(values);
  };

  const deleteHandler = () => {
    onDelete(currentClient?.id);
  };

  const handleTelefonoChange = () => {
    const telefonoValue = methods.getValues("telefono");
    console.log("Valor del teléfono:", telefonoValue);
    // Mejora la lógica de validación con expresiones regulares
    const isTelefonoValid = /^[69]\d{8}$/.test(telefonoValue);
  
    setIsSaveButtonEnabled(isTelefonoValid);
  
    if (!isTelefonoValid) {
      alert("Número de teléfono incorrecto");
      console.log("Número de teléfono incorrecto");
    }
  };
  
  

  const showServiciosSection = currentClient && currentClient.servicios;

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
            </div>
            <div className="row">
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
                onBlur={handleTelefonoChange}
              />
              <label style={{ color: "red" }}>
                * Todos los campos anteriores son obligatorios
              </label>
            </div>
            {showServiciosSection && (
              <div className="row">
                <div className="col-md-4">
                  <label style={{ color: "green" }}>Servicios Contratados: </label>
                  {currentClient.servicios.map((servicio, index) => (
                    <div key={index}>+{servicio.nombre}</div>
                  ))}
                </div>
              </div>
            )}
            {showServiciosSection && (
              <div className="row">
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
            )}
          </form>
          <div className="d-flex flex-column mt-2">
            <Button.Save
              onClick={methods.handleSubmit(onSubmitHandler)}
              disabled={!isSaveButtonEnabled}
            />
            {isEditing && <Button.Delete onClick={deleteHandler} />}
          </div>
        </div>
      </Card>
    </>
  );
};
