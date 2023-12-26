import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "state/api/usuarioApi";
import {
  setPageIndex,
  setPageSize,
  setSearchCriteria,
  setSort,
  setUsuario,
} from "state/usuarioSlice";
import { Table } from "components/shared/Table";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { Button } from "reactstrap";

export const UsersPage = () => {
  const { isLoading, data: userData, isError } = useGetUsersQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outlet = useOutlet();

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  const handlePageIndexChange = (newPage) => {
    // dispatch(setPageIndex(newPage));
  };

  const handlePageSizeChange = (size) => {
    // dispatch(setPageSize(size));
  };

  const handleFilterChange = (criteria) => {
    // dispatch(setSearchCriteria(criteria));
  };

  const handleSort = (sortInfo) => {
    // dispatch(setSort(sortInfo))
  };

  const goToUserNew = () => {
    navigate("/usuarios/new");
  };

  const onRowClick = (rowData, rowMeta) => {
    dispatch(setUsuario(userData[rowMeta.dataIndex]));
    navigate(`/usuarios/${userData[rowMeta.dataIndex].id}`);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (outlet) {
    return <Outlet />;
  }

  const columns = [
    { name: "id", label: "ID", type: "numeric" },
    { name: "username", label: "Usuario", type: "text" },
    { name: "name", label: "Nombre", type: "text" },
    { name: "surname", label: "Apellido", type: "text" },
    { name: "surname2", label: "Apellido2", type: "text" },
    { name: "email", label: "Email", type: "text" },
    {
      name: "active",
      label: "Activo",
      type: "custom",
      customType: (value) => (value ? "Sí" : "No"),
    },
  ];

  return (

    <div className="pageContainer">
      <div className="d-flex mb-3">
        <Button color="primary" className="ms-auto" onClick={goToUserNew}>
          Añadir
        </Button>
      </div>
      <Table
        title={"Usuarios"}
        download={false}
        print={false}
        search={false}
        selectableRows="none"
        data={userData}
        columns={columns}
        pageInfo={userData}
        handlePageIndexChange={handlePageIndexChange}
        handlePageSizeChange={handlePageSizeChange}
        handleFilterChange={handleFilterChange}
        handleSort={handleSort}
        onRowClick={onRowClick}
      />
    </div>
  );
};
