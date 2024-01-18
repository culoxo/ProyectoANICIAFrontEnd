import React, { useEffect, useState } from 'react';
import { Button } from "components/shared/Button";
import { FormInput } from "components/shared/Form/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "reactstrap";
import { resetClient } from "state/clientSlice";

export const FormFactura = ({
  isEditing,
  currentFactura,
  onSubmit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentFactura });
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  useEffect(() => {
    if (currentFactura) {
      methods.reset({
        ...currentFactura,
      });
    }

    return () => dispatch(resetClient());
  }, [currentFactura, dispatch, methods]);

  useEffect(() => {
    // Verificar si los campos requeridos tienen algún valor
    const requiredFields = ["id"];
    const allFieldsFilled = requiredFields.every(
      (field) => !!methods.getValues(field)
    );
    setIsSaveButtonEnabled(allFieldsFilled);
  }, [methods]);

  const onSubmitHandler = (values) => {
    onSubmit(values);
  };

  const deleteHandler = () => {
    onDelete(currentFactura.id);
  };

  const isCreateNew = window.location.href.includes("/new");

  return (
    <>
      <Card className="p-4 mt-3">
        <div className="d-flex ">
          <form className="col-md-10">
            <div className="cl-outline-primary bold text-nowrap mb-3">
              Información de la factura
            </div>
            <div className="row">
              <FormInput
                className="col-md-4"
                name="id"
                label="ID Factura"
                register={methods.register("id")}
                type="text"
                readOnly={true}
              />
              <div className="col-md-4 d-flex align-items-center justify-content-center h4">
                <label>Pendiente</label>
                <input
                  type="checkbox"
                  className="col-md-2 "
                  name="estado"
                  {...methods.register("estado")}
                />
              </div>
            </div>
          </form>
          <div className="d-flex flex-column mt-2">
            <Button.Save
              onClick={methods.handleSubmit(onSubmitHandler)}
              disabled={!isSaveButtonEnabled}
            />
            {!isCreateNew && <Button.Delete onClick={deleteHandler} />}
          </div>
        </div>
      </Card>
    </>
  );
};
