import React, { useEffect } from 'react';
import { UserFormServ } from 'components/User';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { usePostServMutation } from 'state/api/servicioApi'


export const ServNew = () => {

    const navigate = useNavigate();
    const [postServ, { data: newServData, isSuccess: isPostServSuccess, isLoading: isPostServLoading }] = usePostServMutation();

    useEffect(() => {
        if (newServData && isPostServSuccess) {
            NotificationManager.success("Servicio creado correctamente");
            navigate("/servicios");
        }
    }, [newServData, isPostServSuccess, navigate]);

    const postServHandler = (formData) => {
        postServ(formData);
    };

    if (isPostServLoading) {
        return <div>Cargando...</div>
    }

    return (
        <div className='pageContainer'>
            <UserFormServ.FormServicios isEditing={false} onSubmit={postServHandler}  />
        </div>
    );
}