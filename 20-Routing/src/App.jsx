import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import {Home} from "./pages/Home.jsx";
import {Product} from "./pages/Product.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Error from "./pages/Error.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
// const routes=createRoutesFromElements(
//         <Route>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/product" element={<Product/>}/>
//         </Route>
// )
// const router=createBrowserRouter(routes)

const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'product',
                element:<Product/>
            },
            {
                index:true,
                element:<Home/>
            },
            {
                path:'product/:ProductId',
                element:<ProductDetail/>
            }
        ]
    },
    ]
)

function App() {
    return (
        <RouterProvider router={router}>
            {router}
        </RouterProvider>
    )
}

export default App
