import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFacturasQuery } from "state/api/facturaApi";
import {setPageIndex,setPageSize,setSearchCriteria,setSort,setFactura} from "state/facturaSlice";
import { Table } from "components/shared/Table";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { Button } from "reactstrap";


export const FacturaPage = () => {
  //const { searchCriteria, pageIndex, pageSize, sort, sortBy } = useSelector(state => state.auditoria);
  const {isLoading,data: facturaData,isError} = useGetFacturasQuery();
  //{ searchCriteria: encodeURI(JSON.stringify({ searchCriteria })), sort, sortBy, pageIndex, pageSize }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outlet = useOutlet();
    const columns = [
      { name: "id", label: "IdFactura", type: "numeric" },
      { name: "estado", label: "Estado", type: "custom", customType: (value) => value ? "Pendiente" : "Pagada" },
    ];
  


  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  const handlePageIndexChange = (newPage) => {
    //   dispatch(setPageIndex(newPage));
  };

  const handlePageSizeChange = (size) => {
    // dispatch(setPageSize(size));
  };

  const handleFilterChange = (criteria) => {
    //  dispatch(setSearchCriteria(criteria));
  };

  const handleSort = (sortInfo) => {
    //   dispatch(setSort(sortInfo))
  };

  const goToFacturaNew = () => {
    navigate('/factura/new');
}

  const onRowClick = (rowData, rowMeta) => {
    dispatch(setFactura(facturaData[rowMeta.dataIndex]));
    navigate(`/factura/${facturaData[rowMeta.dataIndex].id}`);
  };
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (outlet) {
    return <Outlet />;
  }

  return (
    <div className="pageContainer">
       <div className='d-flex mb-3'><Button color='primary' className='ms-auto' onClick={goToFacturaNew}>Añadir</Button></div>
      <Table
        title={"Factura"}
        download={false}
        print={false}
        search={false}
        selectableRows="none"
        data={facturaData}
        columns={columns}
        pageInfo={facturaData}
        handlePageIndexChange={handlePageIndexChange}
        handlePageSizeChange={handlePageSizeChange}
        handleFilterChange={handleFilterChange}
        handleSort={handleSort}
        onRowClick={onRowClick}
      />
    </div>
  );
};
