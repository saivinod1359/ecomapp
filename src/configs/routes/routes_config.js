import DashboardPage from "../../pages/dashboard/dashboard_page";
import ProductsPage from '../../pages/products/products_page';
import OffersPage from '../../pages/offers/offers_page';
import ProductDetailPage from "../../pages/productDetail/product_details_page";
import CheckoutPage from "../../pages/checkout/checkout_page";

export const navLinks = [{
    label: "Home",
    to: "/"
}, {
    label: "Products",
    to: "/products"
}, {
    label: "Offers",
    to: "/offers"
}, {
    label: "Checkout",
    to: "/checkout"
}
]

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
    },
    {
        path: "/product/:id",
        component: ProductDetailPage
    },{
        path: "/checkout",
        component: CheckoutPage
    }

]