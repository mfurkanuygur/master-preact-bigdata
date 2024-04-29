import { useEffect, useState } from "react"
import { getAllProducts } from "../request/request"
import Loading from "./Loading"

const Homepage = () => {
    const [products, setProducts] = useState()
    const [count, setCount] = useState(8)
    useEffect(() => {
        getAllProducts().then(data => {

            setProducts(data)
        })
    }, [])

    const handleClick = () => {
        setCount(count + 8)
        console.log(count)
    }

    return (
        <div className="homepage">
            <h1>All Products: {products?.length}</h1>
            <div className="container">
                {products &&
                    products?.slice(0, count).map(product => (
                        <div key={product.id} className="pokemon-card">
                            <div className="pokemon-img"><img src={product?.image} alt={product?.title} /></div>
                            <h3>{product.title}</h3>
                        </div>
                    ))
                    || <Loading />
                }
            </div>
            <button onClick={() => handleClick()}>see more</button>
        </div>
    )
}

export default Homepage