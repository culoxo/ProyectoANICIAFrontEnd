import { FormInput } from "components/shared/Form/FormInput";
import { FormSelect } from "components/shared/Form/FormSelect";
import { method } from "lodash";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Card, Table } from "reactstrap";
import { resetClient } from "state/clientSlice";
import { IoSaveOutline } from "react-icons/io5";
import { Button } from "components/shared/Button";
import { current } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

export const FormFactura = ({
  isEditing,
  currentFactura,
  onSubmit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  console.log(currentFactura);
  const methods = useForm({ defaultValues: currentFactura });

  useEffect(() => {
    if (currentFactura) {
      methods.reset({
        ...currentFactura,
      });
    }

    return () => dispatch(resetClient());
  }, []);

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
              Información del servicio
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
                  name="Estado"
                  {...methods.register("estado")}
                />
              </div>
            </div>
          </form>
          <div className="d-flex flex-column mt-2">
            <Button.Save onClick={methods.handleSubmit(onSubmitHandler)} />
            {!isCreateNew && <Button.Delete onClick={deleteHandler} />}
          </div>
        </div>
      </Card>
    </>
  );
};
