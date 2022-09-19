export const routes: Routes = {
    title: 'Dashboard',
    icon: '',
    path: '/administration',
    children: [
        {
            title: 'Cuenta',
            icon: '',
            path: '/account',
        },
        {
            title: 'Proveedores de logistica',
            icon: '',
            path: '/providers',
        },
        {
            title: 'Riders',
            icon: '',
            path: '/',
        },
        {
            title: 'Disponibilidad',
            icon: '',
            path: '/',

        },
        {
            title: 'Parametros de logistica',
            icon: '',
            path: '/',
        },
        {
            title: 'Canales de venta',
            icon: '',
            path: '/',
        },
        {
            title: 'Canales de venta',
            icon: '',
            path: '/',
        },
        {
            title: 'Automatizacion',
            icon: '',
            path: '/',
        },
        {
            title: 'Impresoras',
            icon: '',
            path: '/',
        },
        {
            title: 'Integracion',
            icon: '',
            path: '/',
        },
        {
            title: 'Plantillas',
            icon: '',
            path: '/',
        }
    ]
}

interface Routes {
    title: string,
    icon: string,
    path: string,
    children: Route[]
}

export interface Route {
    title: string,
    icon: string,
    path: string,
}