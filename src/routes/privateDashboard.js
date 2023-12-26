
import PrivateLayoutDashboard from 'views/common/layout/PrivateLayoutDashboard';
import { ClientPage } from 'views/admin-users/ClientPage';
import { ClientNew } from 'views/admin-users/ClientNewPage';
import { ClientEditPage } from 'views/admin-users/ClientEditPage';
import { UserCrumb } from 'components/shared/Breadcrumb/UserCrumb';
import { ServPage } from 'views/admin-users/ServPage';
import { UsersPage } from 'views/admin-users/UsersPage';
import { UserNew} from 'views/admin-users/UsersNewPage';
import { UsersEditPage} from 'views/admin-users/UsersEditPage';
import { ServNew } from 'views/admin-users/ServNewPage';
import { ServEdit } from 'views/admin-users/ServEditPage';
import { FacturaPage } from 'views/admin-users/FacturaPage';
import { FacturaInfoPage } from 'views/admin-users/FacturaInfoPage';
import SideMenu from 'components/side-menu/SideMenu'; 
import Login from '../views/admin-users/Login'

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
