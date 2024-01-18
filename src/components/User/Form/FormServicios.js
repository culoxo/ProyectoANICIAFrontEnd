import React, { useEffect, useState } from 'react';
import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";

export const FormServicios = ({
  isEditing,
  currentServ,
  onSubmit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentServ });
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  useEffect(() => {
    if (currentServ) {
      methods.reset({
        ...currentServ,
      });
    }

    return () => dispatch(resetClient());
  }, [currentServ, dispatch, methods]);

  useEffect(() => {
    // Verificar si los campos requeridos tienen algún valor
    const requiredFields = ["nombre"];
    const allFieldsFilled = requiredFields.every(
      (field) => !!methods.getValues(field)
    );
    setIsSaveButtonEnabled(allFieldsFilled);
  }, [methods.watch()]);

  const onSubmitHandler = (values) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete(currentServ.id);
  };

  return (
    <>
      <Card className="p-4 mt-3">
      <div className="d-flex ">
        <form className="col-md-10">
          <div className="cl-outline-primary bold text-nowrap mb-3">
            Información de los Servicios
          </div>
          <div className="row">
            <FormInput
              className="col-md-4"
              name="nombre"
              label="Nombre"
              register={methods.register("nombre")}
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
        <div className="d-flex flex-column">
          <Button.Save
            onClick={methods.handleSubmit(onSubmitHandler)}
            disabled={!isSaveButtonEnabled}
          />
          {isEditing && <Button.Delete onClick={handleDelete}/>}
        </div>
      </div>
      </Card>
    </>
  );
};
