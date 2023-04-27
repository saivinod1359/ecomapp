import DashboardPage from "../../pages/dashboard/dashboard_page";
import ProductsPage from '../../pages/products/products_page';
import OffersPage from '../../pages/offers/offers_page';

export const routes = [
    {
        path: "/",
        component: DashboardPage
    },
    {
        path: "/products",
        component: ProductsPage
    },
    {
        path: "/offers",
        component: OffersPage
    }

]