import { Client } from "components/User";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";
import { useGetClientQuery, useUpdateClientMutation, useDeleteClientMutation } from "state/api/clientApi";

export const ClientEditPage = () => {

    const { clientId } = useParams();
    const navigate = useNavigate();
    const { data: currentClient, isLoading: isGetClientLoading } = useGetClientQuery(String(clientId));
    const [updateClient, { isSuccess: isUpdateClientSuccess, isLoading: isUpdateClientLoading }] = useUpdateClientMutation();
    const [deleteClient] = useDeleteClientMutation();

    // When user update is successful, user is notificated and redireceted to principal page

    useEffect(() => {
        if (isUpdateClientSuccess) {
            NotificationManager.success("Cliente actualizado correctamente");
            navigate("/clientes");
        }
    }, [isUpdateClientSuccess]);

    // Form handlers

    const updateClientHandler = (formData) => {
        updateClient({ clientId: String(clientId), updatedClient: formData });
    };

    const deleteClientHandler = () => {
        deleteClient({ clientId: String(clientId) }.clientId);
        navigate("/clientes");
    };

    if (isGetClientLoading || isUpdateClientLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="pageContainer">
            <Client.FormClient currentClient={currentClient} isEditing={true} onSubmit={updateClientHandler} onDelete={deleteClientHandler} />
        </div>
    );
}