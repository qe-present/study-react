import {Link,useNavigate} from 'react-router-dom'

export function Home() {
    const navigate=useNavigate();
    function handleClick(){
        navigate('product')
    }
    return <>
        <h1>Home</h1>
        <p> go to <Link to="/product">product</Link></p>
        <button onClick={handleClick}>Go to Product</button>
    </>;

}