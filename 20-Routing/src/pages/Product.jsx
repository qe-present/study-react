import {Link} from "react-router-dom";
const PRODUCTS = [
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
]
export function Product() {
    return <>
    <h1>Product</h1>;
        <ul>
            {PRODUCTS.map(product=>(
                <li key={product.id}>
                    <Link to={`${product.id}`}>{product.name}</Link>
                </li>
            ))}

        </ul>
    </>
}