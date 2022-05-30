import { useCartContext } from '../../Context/CartContext';
import "./Cart.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';



export default function Cart() {

    const { cartList, removeFromCart, totalPrice } = useCartContext();
    const envioPrice = 200;

    return (
        <div className="cart" >
            <div className="cart__header">
                <h1>Carrito</h1>
            </div>
            <div className="cart__body">
                {cartList.length > 0 ?
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Imagen</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Precio</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Cantidad</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Eliminar</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartList.map(item => (
                                                    <tr key={item.id}>
                                                        <td className='border-0 align-middle'><img src={item.img} alt={item.name} className="img-fluid rounded shadow-sm" />
                                                        </td>
                                                        <td className="border-0 align-middle">{item.name}
                                                        </td>
                                                        <td className="border-0 align-middle"><strong>$ {item.price * item.quantity}</strong></td>
                                                        <td className="border-0 align-middle">{item.quantity}</td>
                                                        <td className="border-0 align-middle"><button onClick={() => removeFromCart(item.id)}>
                                                            <FontAwesomeIcon icon={faTrashAlt} className="cart-icon" />
                                                        </button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                <div className="col-lg-12">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Resumen de la Compra</div>
                                    <div className="p-4">
                                        <p className="mb-4"><em>Gracias por Confiar en BonaDrinks</em></p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Subtotal</strong><strong>$ {totalPrice()}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Costos de envio</strong><strong>$ {envioPrice}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="fw-bold">$ {totalPrice() + envioPrice}</h5>
                                            </li>
                                        </ul><a href="#" className="btn btn-success rounded-pill py-2 d-md-block">COMPRAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <div className="cart__body__empty">
                        <h2>El Carrito esta Vacio</h2>
                        <Link to="/shop">
                            <button className="cart__body__empty__button">
                                <FontAwesomeIcon icon={faArrowLeft} className="cart-icon" /> Ir a Comprar
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}



