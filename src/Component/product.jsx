import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { addCart } from '../Redux/Action/Index'


 const Product = () => {
    const {id}=useParams();
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(false)
    const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product));
    }
    useEffect(()=>{
        const getProduct=async ()=>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    },[id])

    const Loading =()=>{
        return(
            <>
            <div className="col mb-5">
                <Skeleton height={400}/>

            </div>
            <div className="col-mb-5">
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} />
                <Skeleton height={25} width={150} />
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100} />
                <Skeleton height={50} width={100} style={{marginLeft:6}} />
            </div>
            </>
        )
    }

    const ShowProduct = ()=>{
        return(
            <>
            <div className="col-md-6">

                <img src={product.image} alt={product.title} height={400} width={400} />
            </div>
            <div className="col-md-6">
                <h3 className="text-uppercase text-black-50">
                    {product.category}

                </h3>
                <h1 className="display-5">
                    {product.title} 

                </h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'> </i>

                </p>
                <h3 className="display-6 fw-bolder">
                    ₹{product.price}

                </h3>
                <p className="lead">
                    {product.description}

                </p>
                <button className="btn btn-outline-dark py-2 px-4" onClick={()=>addProduct(product)}>
                    Add To Cart 

                </button>
                <NavLink className="btn btn-dark mx-2 py-2" to="/cart">

                    Go To Cart 

                </NavLink>
            </div>
            
            </>
        )
    }
  return (

    <div>
        <div className="container py-5">
            <div className="row py-5" >
                {
                    loading ? <Loading/> : <ShowProduct/>
                }

            </div>

        </div>

    </div>
  )
}
export default Product

