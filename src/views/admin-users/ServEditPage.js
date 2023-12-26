import { UserFormServ } from "components/User";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";
import { useGetServQuery, useUpdateServMutation, useDeleteServMutation } from "state/api/servicioApi";

export const ServEdit = () => {

    const { servId } = useParams();
    const navigate = useNavigate();
    const { data: currentServ, isLoading: isGetServLoading } = useGetServQuery(String(servId));
    const [updateServ, { isSuccess: isUpdateServSuccess, isLoading: isUpdateServLoading }] = useUpdateServMutation();
    const [deleteServ] = useDeleteServMutation();

    useEffect(() => {
        if (isUpdateServSuccess) {
            NotificationManager.success("Servicio actualizado correctamente");
            navigate("/servicios");
        }
    }, [isUpdateServSuccess]);

    // Form handlers

    const updateServHandler = (formData) => {
        updateServ({ servId: String(servId), updatedServ: formData });
    };

    const deleteServHandler = () => {
        deleteServ({ servId: String(servId) }.servId);
        navigate("/servicios");
    };


    if (isGetServLoading || isUpdateServLoading) {
        return <div>Cargando...</div>;
    }
    
    return (
        <div className="pageContainer">
            <UserFormServ.FormServicios currentServ={currentServ} isEditing={true} onSubmit={updateServHandler} onDelete={ deleteServHandler}/>
        </div>
    );
}