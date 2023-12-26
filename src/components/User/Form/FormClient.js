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

  const isCreateNew = window.location.href.includes("/new");

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
            {!isCreateNew && <Button.Delete onClick={deleteHandler} />}
          </div>
        </div>
      </Card>
    </>
  );
};
