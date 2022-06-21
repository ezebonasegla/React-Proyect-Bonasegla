import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import "./Form.scss";

export const FormExample = () => {
    const { register, handleSubmit } = useForm();
    const { placeAnOrder } = useCartContext();
    const onSubmit = (data) => Swal.fire("Gracias por tu compra", "", "success") && placeAnOrder(data);

    return (
        <div className="checkout">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="section-heading">Complete sus datos</h2>
                <div className="payment-form">
                    <label>Nombre</label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} />
                    <label>Apellido</label>
                    <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    <label>Numero de Telefono</label>
                    <input type="number" {...register("phoneNumber", { required: true })} />
                    <label>Mail</label>
                    <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                    <label>Ciudad</label>
                    <select {...register("city")}>
                        <option value="Quilmes">Quilmes</option>
                        <option value="Bernal">Bernal</option>
                    </select>
                    <label>Direccion</label>
                    <input {...register("address", { required: true })} />

                    <button type="submit" className="btn btn-success rounded-pill py-2 d-md-block" >CONFIRMAR COMPRA</button>
                </div>
            </form >
        </div>
    );
}




