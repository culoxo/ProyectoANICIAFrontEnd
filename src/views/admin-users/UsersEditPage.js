import { FormUsuario } from "components/User";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } from "state/api/usuarioApi";

export const UsersEditPage = () => {

    const { userId } = useParams();
    const navigate = useNavigate();
    const { data: currentUser, isLoading: isGetUserLoading } = useGetUserQuery(String(userId));
    const [updateUser, { isSuccess: isUpdateUserSuccess, isLoading: isUpdateUserLoading }] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    // When user update is successful, user is notificated and redireceted to principal page

    useEffect(() => {
        if (isUpdateUserSuccess) {
            NotificationManager.success("Usuario actualizado correctamente");
            navigate("/usuarios");
        }
    }, [isUpdateUserSuccess]);

    // Form handlers

    const updateUserHandler = (formData) => {
        updateUser({ userId: String(userId), updatedUser: formData });
    };

    const deleteUserHandler = () => {
        deleteUser({ userId: String(userId) }.userId);
        navigate("/usuarios");
    };

    if (isGetUserLoading || isUpdateUserLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="pageContainer">
            <FormUsuario.FormUser currentUser={currentUser} isEditing={true} onSubmit={updateUserHandler} onDelete={deleteUserHandler} />
        </div>
    );
}