import {Link, useParams} from "react-router-dom";

export default function ProductDetail(){
    const params=useParams()
    return (
        <>
            <h1>Product Detail</h1>
            <p>Product ID: {params.ProductId}</p>
            <p><Link to=".." relative="path">back</Link></p>
        </>
    )
}