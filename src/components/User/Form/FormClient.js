
import React, { useEffect, useState } from 'react';
import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";
import { useGetServsQuery } from "state/api/servicioApi";

export const FormClient = ({
  isEditing,
  currentClient,
  onSubmit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentClient });
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);
  const { isLoading, data: servData, isError } = useGetServsQuery();
  const [selectedService, setSelectedService] = useState(null);

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

  }, [methods.watch()]);

  const onSubmitHandler = (values) => {
    // Construye el objeto con la lista actualizada de servicios
    const selectedServiceObject = selectedService
      ? { servicioId: selectedService.id, nombre: selectedService.nombre, deleted: false, active: true }
      : null;
  
    const updatedServicios = selectedServiceObject
      ? [...(values.servicios || []), selectedServiceObject]
      : (values.servicios || []);
  
    const valuesWithService = {
      ...values,
      servicios: updatedServicios,
    };
  
    onSubmit(valuesWithService);
  };
  
  

  const deleteHandler = () => {
    onDelete(currentClient?.id);
  };

  const handleTelefonoChange = () => {
    const telefonoValue = methods.getValues("telefono");
    const isTelefonoValid = /^[69]\d{8}$/.test(telefonoValue);

    setIsSaveButtonEnabled(isTelefonoValid);

    if (!isTelefonoValid) {
      alert("Número de teléfono incorrecto");
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

<div className="col-md-4">
  <label htmlFor="servicio">¿Quieres añadir un nuevo servicio?</label>
  <select
    className="form-control"
    name="servicios"
    onChange={(e) => {
      const selectedId = e.target.value;
      const selectedService = servData.find((servicio) => servicio.id === parseInt(selectedId, 10));
      setSelectedService(selectedService);
    }}
    value={selectedService ? selectedService.id : ""}>
    <option value="" disabled>
      Seleccione un servicio
    </option>
    {servData &&
      servData.map((servicio) => (
        <option key={servicio.id} value={String(servicio.id)}>
          {servicio.nombre}
        </option>
      ))}
  </select>
</div>
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
  onClick={methods.handleSubmit(() => {
    const formData = methods.getValues();
    onSubmitHandler(formData);
  })}
  disabled={!isSaveButtonEnabled}
/>


            {isEditing && <Button.Delete onClick={deleteHandler} />}
          </div>
        </div>
      </Card>
    </>
  );
};