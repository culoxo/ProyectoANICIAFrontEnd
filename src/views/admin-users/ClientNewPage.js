import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { usePostClientMutation } from 'state/api/clientApi';
import { setPageIndex, setPageSize } from 'state/clientSlice';
import { Client } from 'components/User';
import { useNavigate, useOutlet } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

/**
 * Users page
 */
export const ClientNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postClient, { data: newClientData, isSuccess: isPostClientSuccess, isLoading: isPostClientLoading }] = usePostClientMutation();

    useEffect(() => {
        if (newClientData && isPostClientSuccess) {
            NotificationManager.success("Cliente creado correctamente");
            navigate("/clientes");
        }
    }, [newClientData, isPostClientSuccess, navigate]);


    const postClientHandler = (formData) => {
        postClient(formData);
    };

    if (isPostClientLoading) {
        return <div>Cargando...</div>
    }

    return (
        <div className='pageContainer'>
            <Client.FormClient isEditing={false} onSubmit={postClientHandler}  />
        </div>
    );
}