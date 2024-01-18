import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useGetClientsQuery } from 'state/api/clientApi';
import { setPageIndex, setPageSize, setSearchCriteria, setSort, setClient } from 'state/clientSlice';
import { Table } from 'components/shared/Table';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import { Button } from 'reactstrap';


export const ClientPage = () => {
  
    const { searchCriteria, pageIndex, pageSize, sort, sortBy } = useSelector(state => state.client);
    const { isLoading, data: clientData, isError } = useGetClientsQuery(
        { searchCriteria: encodeURI(JSON.stringify({ searchCriteria })), sort, sortBy, pageIndex, pageSize });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const outlet = useOutlet();
    const columns = [
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "direccion", label: "Direccion", type: "text" },
        { name: "email", label: "Email", type: "text" },
        { name: "telefono", label: "Telefono", type: "text" },
        { name: "active", label: "Activo", type: "custom", customType: (value) => value ? "Sí" : "No" },
        {
            name: "servicios",
            label: "Servicios contratados",
            type: "custom",
            customType: (value) => {
              if (Array.isArray(value) && value.length > 0) {
                return value.map((servicio) => servicio.nombre).join(", ");
              } else {
                return ""; // O cualquier valor por defecto si el array está vacío o no existe
              }
            },
        }
    ]

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    const handlePageIndexChange = (newPage) => {
        dispatch(setPageIndex(newPage));
    }

    const handlePageSizeChange = (size) => {
        dispatch(setPageSize(size));
    }

    const handleFilterChange = (criteria) => {
        dispatch(setSearchCriteria(criteria));
    }

    const handleSort = (sortInfo) => {
        dispatch(setSort(sortInfo))
    }

    const goToClientNew = () => {
        navigate('/clientes/new');
    }

    const onRowClick = (rowData, rowMeta) => {
        dispatch(setClient(clientData[rowMeta.dataIndex]));
        navigate(`/clientes/${clientData[rowMeta.dataIndex].id}`);
    }

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (outlet) {
        return <Outlet />;
    }

    return (
        <div className='pageContainer'>
            <div className='d-flex mb-3'><Button color='primary' className='ms-auto' onClick={goToClientNew}>Añadir</Button></div>
            <Table
                title={"Clientes"}
                download={false}
                print={false}
                search={false}
                selectableRows="none"
                data={clientData}
                columns={columns}
                pageInfo={clientData}
                handlePageIndexChange={handlePageIndexChange}
                handlePageSizeChange={handlePageSizeChange}
                handleFilterChange={handleFilterChange}
                handleSort={handleSort}
                onRowClick={onRowClick}
            />
        </div>
    );
}
