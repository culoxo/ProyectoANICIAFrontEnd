
import { UserCrumb } from 'components/shared/Breadcrumb/UserCrumb';
import { ClientEditPage } from 'views/admin-users/ClientEditPage';
import { ClientNew } from 'views/admin-users/ClientNewPage';
import { ClientPage } from 'views/admin-users/ClientPage';
import { FacturaInfoPage } from 'views/admin-users/FacturaInfoPage';
import { FacturaPage } from 'views/admin-users/FacturaPage';
import { FacturaNew } from 'views/admin-users/FacturaNewPage';
import { ServEdit } from 'views/admin-users/ServEditPage';
import { ServNew } from 'views/admin-users/ServNewPage';
import { ServPage } from 'views/admin-users/ServPage';
import { UsersEditPage } from 'views/admin-users/UsersEditPage';
import { UserNew } from 'views/admin-users/UsersNewPage';
import { UsersPage } from 'views/admin-users/UsersPage';
import PrivateLayoutDashboard from 'views/common/layout/PrivateLayoutDashboard';

const routes = {
  path: "/",
  component: <PrivateLayoutDashboard/>,
  children: [
    
    {
      path: "/clientes",
      crumb: () => <span>Client</span>,
      component: <ClientPage />,
      children: [
        {
          path: "/clientes/new",
          crumb: () => <span>Nuevo cliente</span>,
          component: <ClientNew />
        },
        {
          path: "/clientes/:clientId",
          crumb: () => <UserCrumb />,
          component: <ClientEditPage />
        }
      ]},
      { 
      path: "/servicios",
      crumb: () => <span>Servicios</span>,
      component: <ServPage />,
      children: [
        {
        path: "/servicios/new",
        crumb: () => <span>Nuevo Servicio</span>,
        component: <ServNew />
      },
      {
        path: "/servicios/:servId",
        crumb: () => <UserCrumb />,
        component: <ServEdit />
      }]
    },
    { 
      path: "/factura",
      crumb: () => <span>Factura</span>,
      component: <FacturaPage />,
      children: [
        {
          path: "/factura/new",
          crumb: () => <span>Nueva Factura</span>,
          component: <FacturaNew />
        },
      {
        path: "/factura/:facturaId",
        crumb: () => <UserCrumb />,
        component: <FacturaInfoPage />
      }]
    },     {
      
      path: "/usuarios",
      crumb: () => <span>Usuarios</span>,
      component: <UsersPage />,
      children: [
        {
          path: "/usuarios/new",
          crumb: () => <span>Nuevo Usuario</span>,
          component: <UserNew />
        },
        {
          path: "/usuarios/:userId",
          crumb: () => <UserCrumb />,
          component: <UsersEditPage />
        }
      ]},
  ],
};

export default routes;
