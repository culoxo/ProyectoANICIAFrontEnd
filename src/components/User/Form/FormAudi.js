import { FormInput } from "components/shared/Form/FormInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Card, Table } from "reactstrap";
import { resetClient } from "state/clientSlice";

export const FormAudi = ({ currentAudi }) => {
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: currentAudi });
  const navigate = useNavigate();
  useEffect(() => {
    if (currentAudi) {
      methods.reset({
        ...currentAudi,
      });
    }

    return () => dispatch(resetClient());
  }, []);

  const backAudiHandler = () => {
    navigate("/auditoria");
  };
  return (
    <>
      <Card className="p-4 mt-3">
        <form>
          <div className="cl-outline-primary bold text-nowrap mb-3">
            Información de auditoria
          </div>
          <div className="d-flex justify-content-between">
            <div className="row col-10">
              <FormInput
                className="col-md-3"
                name="fase"
                label="Fase"
                register={methods.register("fase")}
                type="text"
                readOnly={true}
              />
              <FormInput
                className="col-md-8"
                name="mensaje"
                label="Mensaje"
                register={methods.register("mensaje")}
                type="text"
                readOnly={true}
              />
            </div>
            <div className=" col-3 d-flex align-items-center mb-4">
              <button
                className="btn btn-primary text-right"
                onClick={backAudiHandler}
              >
                Volver
              </button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};
