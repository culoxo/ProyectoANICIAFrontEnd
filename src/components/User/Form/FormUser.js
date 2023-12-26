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
            <FormInput
              className="col-md-5 mt-30"
              name="email"
              label="Email"
              register={methods.register("email")}
              type="text"
            />
            <div className="col-md-4 d-flex align-items-center justify-content-center mt-30 h4">
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
          <div className="d-flex flex-column mt-30">
            <Button.Save onClick={methods.handleSubmit(onSubmitHandler)} />
            <Button.Delete onClick={handleDelete}/>
          </div>
          </div>
      </Card>
    </>
  );
};
