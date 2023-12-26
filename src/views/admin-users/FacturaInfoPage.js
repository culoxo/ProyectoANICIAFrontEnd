import { Factura } from "components/User";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetFacturaQuery, useUpdateFacturaMutation, useDeleteFacturaMutation } from "state/api/facturaApi";
import { NotificationManager } from "react-notifications";



export const FacturaInfoPage = () => {

    const { facturaId } = useParams();
    const navigate = useNavigate();
    const { data: currentFactura, isLoading: isGetFacturaLoading } = useGetFacturaQuery(String(facturaId));
    const [updateFactura, { isSuccess: isUpdateFacturaSuccess, isLoading: isUpdateFacturaLoading }] = useUpdateFacturaMutation();
    const [deleteFactura] = useDeleteFacturaMutation();

    // When user update is successful, user is notificated and redireceted to principal page

    useEffect(() => {
        if (isUpdateFacturaSuccess) {
            NotificationManager.success("Factura actualizada correctamente");
            navigate("/factura");
        }
    }, [isUpdateFacturaSuccess]);

    // Form handlers

    const updateFacturaHandler = (formData) => {
        updateFactura({ facturaId: String(facturaId), updatedFactura: formData });
    };

    const deleteFacturaHandler = () => {
        deleteFactura({ facturaId: String(facturaId) }.facturaId);
        navigate("/factura");
    };

    if (isGetFacturaLoading || isUpdateFacturaLoading) {
        return <div>Cargando...</div>;
    }
    return (
        <div className="pageContainer">
            <Factura.FormFactura currentFactura={currentFactura} isEditing={true} onSubmit={updateFacturaHandler} onDelete={deleteFacturaHandler}  />
        </div>
    );
}