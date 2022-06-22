import React from 'react'
import { Link } from 'react-router-dom'
import GoToShopButton from '../GoToShopButton/GoToShopButton'
import './Inicio.scss'

const inicio = () => {
    return (
        <div>
        <div className='hero-bg'>
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Bona Drinks</p>
                                    <h1>Delivery de Bebidas</h1>
                                    <div className="hero-btns">
                                        <GoToShopButton black='no' />
                                        <Link to={"/aboutUs"} className="boxed-btn"><svg width="277" height="62">
                                                <defs>
                                                    <linearGradient id="grad1">
                                                        <stop offset="0%" stopColor="#dfe0db" />
                                                        <stop offset="100%" stopColor="#44eca6" />
                                                    </linearGradient>
                                                </defs>
                                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                                            </svg>
                                                <span>Acerca de Nosotros</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default inicio
