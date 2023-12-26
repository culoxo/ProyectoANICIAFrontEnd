import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useGetServsQuery } from 'state/api/servicioApi';
import { setPageIndex, setPageSize, setSearchCriteria, setSort, setServicio } from 'state/servicioSlice';
import { Table } from 'components/shared/Table';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import { Button } from 'reactstrap';



export const ServPage = () => {
   // const { searchCriteria, pageIndex, pageSize, sort, sortBy } = useSelector(state => state.servicios);
    const { isLoading, data: servData, isError } = useGetServsQuery(
      // { searchCriteria: encodeURI(JSON.stringify({ searchCriteria })), sort, sortBy, pageIndex, pageSize }
        );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const outlet = useOutlet();
    const columns = [
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "active", label: "Activo", type: "custom", customType: (value) => value ? "Sí" : "No" },
    ]

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    const handlePageIndexChange = (newPage) => {
//      dispatch(setPageIndex(newPage));
    }

    const handlePageSizeChange = (size) => {
     //   dispatch(setPageSize(size));
    }

    const handleFilterChange = (criteria) => {
     //   dispatch(setSearchCriteria(criteria));
    }

    const handleSort = (sortInfo) => {
     //   dispatch(setSort(sortInfo))
    }

    const goToServNew = () => {
        navigate('/servicios/new');
    }

    const onRowClick = (rowData, rowMeta) => {
        dispatch(setServicio(servData[rowMeta.dataIndex]));
        navigate(`/servicios/${servData[rowMeta.dataIndex].id}`);
    }

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (outlet) {
        return <Outlet />;
    }

    return (
        <div className='pageContainer'>
            <div className='d-flex mb-3'><Button color='primary' className='ms-auto' onClick={goToServNew}>Añadir</Button></div>
            <Table
                title={"Servicios"}
                download={false}
                print={false}
                search={false}
                selectableRows="none"
                data={servData}
                columns={columns}
                pageInfo={servData}
                handlePageIndexChange={handlePageIndexChange}
                handlePageSizeChange={handlePageSizeChange}
                handleFilterChange={handleFilterChange}
                handleSort={handleSort}
                onRowClick={onRowClick}
            />
        </div>
    );
}
