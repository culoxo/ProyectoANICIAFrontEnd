import React, { useEffect } from 'react';
import { FormUsuario } from 'components/User';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { usePostUserMutation } from 'state/api/usuarioApi'


export const UserNew = () => {

    const navigate = useNavigate();
    const [postUser, { data: newUserData, isSuccess: isPostUserSuccess, isLoading: isPostUserLoading }] = usePostUserMutation();

    useEffect(() => {
        if (newUserData && isPostUserSuccess) {
            NotificationManager.success("Usuario creado correctamente");
            navigate("/usuarios");
        }
    }, [newUserData, isPostUserSuccess, navigate]);

    const postUserHandler = (formData) => {
        postUser(formData);
    };

    if (isPostUserLoading) {
        return <div>Cargando...</div>
    }

    return (
        <div className='pageContainer'>
            <FormUsuario.FormUser isEditing={false} onSubmit={postUserHandler}  />
        </div>
    );
}