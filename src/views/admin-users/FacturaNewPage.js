import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { usePostFacturaMutation } from 'state/api/facturaApi';
import { setPageIndex, setPageSize } from 'state/facturaSlice';
import { Factura } from 'components/User';
import { useNavigate, useOutlet } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

/**
 * Factura page
 */
export const FacturaNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postFactura, { data: newFacturaData, isSuccess: isPostFacturaSuccess, isLoading: isPostFacturaLoading }] = usePostFacturaMutation();

    useEffect(() => {
        if (newFacturaData && isPostFacturaSuccess) {
            NotificationManager.success("Factura creada correctamente");
            navigate("/factura");
        }
    }, [newFacturaData, isPostFacturaSuccess, navigate]);


    const postClientHandler = (formData) => {
        postFactura(formData);
    };

    if (isPostFacturaLoading) {
        return <div>Cargando...</div>
    }

    return (
        <div className='pageContainer'>
            <Factura.FormClient isEditing={false} onSubmit={postClientHandler}  />
        </div>
    );
}