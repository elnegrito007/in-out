export let defaultRoutes: Routes = {
    title: 'Home',
    icon: '',
    path: '/',
    children: [
        {
            title: 'Dashboard',
            icon: '',
            path: '/',
            expand: false,
            children: []
        },
        {
            title: 'Proveedores de logistica',
            icon: '',
            path: '/',
            expand: false,
            children: []
        },
        {
            title: 'Logistica',
            icon: '',
            path: '/administration',
            expand: false,
            children: [
                {
                    title: 'Riders',
                    icon: '',
                    path: '/',
                    expand: false,
                    children: [
                        {
                            title: 'Monitor PDD',
                            icon: '',
                            path: '/',
                            expand: false,
                            children: []
                        },
                        {
                            title: 'Historico',
                            icon: '',
                            path: '/',
                            expand: false,
                            children: []
                        }
                    ]
                },
                {
                    title: 'Turnos',
                    icon: '',
                    path: '/',
                    expand: false,
                    children: []
                },
                {
                    title: 'Terceros',
                    icon: '',
                    path: '/',
                    expand: false,
                    children: []
                },
                {
                    title: 'Zonas',
                    icon: '',
                    path: '/',
                    expand: false,
                    children: []
                },
                {
                    title: 'Asignación',
                    icon: '',
                    path: '/',
                    expand: false,
                    children: []
                }
            ]
        },
        {
            title: 'Canales de venta',
            icon: '',
            path: '/',
            expand: false,
            children: []
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
    expand: boolean,
    children: Route[]
}
