import React, { useEffect, useState } from 'react';
import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";
import PrivacyPolicyModal from "../../shared/privacidad";

export const FormUser = ({ isEditing, currentUser, onSubmit, onDelete }) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentUser });
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  useEffect(() => {
    if (currentUser) {
      methods.reset({
        ...currentUser,
      });
    }

    return () => dispatch(resetClient());
  }, []);

  useEffect(() => {
    // Verificar si los campos requeridos tienen algún valor
    const requiredFields = [
      "username",
      "name",
      "surname",
      "surname2",
      "email",
      "password",
      "preguntaSeg",
      "respuestaSeg",
    ];

    const allFieldsFilled = requiredFields.every(field => !!methods.getValues(field));
    setIsSaveButtonEnabled(allFieldsFilled);
  }, [methods.watch()]); // Agregar watch() para rastrear cambios en los valores de los campos

  const onSubmitHandler = (values) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete(currentUser.id);
  };

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const closePrivacyPolicyModal = () => {
    setShowPrivacyPolicy(false);
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
              type="password"
            />
            <label style={{ color: 'red'}}>
              * Todos los campos anteriores son obligatorios
            </label>
            <label style={{ color: 'red'}}>
              Al crear su usuario, acepta la{' '}
              <span
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={handlePrivacyPolicyClick}
              >
                política de privacidad
              </span>
            </label>
          </div>
          <div className="row">
          <FormInput
  className="col-md-5"
  name="passwordAdmin"
  label="Password Admin"
  type="password"
  onBlur={(e) => {
    const passwordAdminValue = e.target.value;

    if (passwordAdminValue && passwordAdminValue.toLowerCase() === "anicia") {
      // Opción 1: Cambiar el valor de admin directamente
      methods.setValue("admin", true);

      console.log("El contenido de passwordAdmin es 'anicia' al perder el foco.");
    } else {
      // Opción 1: Si el campo está vacío, cambiar el valor de admin a false
      methods.setValue("admin", false);
    }
  }}
/>
            <div className="col-md-4 d-flex align-items-center justify-content-center mt-30 h4">
              <label>Activo</label>
              <input
                type="checkbox"
                className="col-md-4 "
                name="active"
                {...methods.register("active")}
              />
            </div>
          </div>
        </form>
        <div className="d-flex flex-column mt-30">
        <Button.Save onClick={methods.handleSubmit(onSubmitHandler)} disabled={!isSaveButtonEnabled} />
          {isEditing && <Button.Delete onClick={handleDelete}/>}
        </div>
      </div>
      </Card>

      {/* Agregar el componente de la política de privacidad */}
      {showPrivacyPolicy && (
        <PrivacyPolicyModal onClose={closePrivacyPolicyModal} />
      )}
    </>
  );
};
