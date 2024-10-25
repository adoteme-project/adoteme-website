import OngLayout from "@/components/layout/OngLayout";
import OngAplicacoes from "@/pages/OngAplicacoes";
import OngContatos from "@/pages/OngContatos";
import OngDashboard from "@/pages/OngDashboard";
import OngPet from "@/pages/OngPet";
import { createBrowserRouter } from "react-router-dom";

const routerOng = createBrowserRouter([
    {
        path: "/ong",
        element: OngLayout,
        children: [
            {
                path: "dashboard",
                element: OngDashboard,
                handle: { crumb: 'Dashboard' }
            },
            {
                path: "pet",
                element: OngPet,
                handle: { crumb: 'Pets' }
            },
            {
                path: "aplicacoes",
                element: OngAplicacoes,
                handle: { crumb: 'Aplicações' }
            },
            {
                path: "contatos",
                element: OngContatos,
                handle: { crumb: 'Contatos' }
            },
            {
                path: "configuracoes",
                element: OngContatos,
                handle: { crumb: 'Configurações' }
            }
        ]
    }
]);

export default routerOng;