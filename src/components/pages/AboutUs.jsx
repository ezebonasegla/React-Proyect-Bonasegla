import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import './AboutUs.scss'

const aboutUs = () => {
    return (
        <div className='view'>
            <h1>Acerca de Nosotros</h1>
            <div className="feature-bg">
                <div className="container">
                    <div className="row">
                        <div className="featured-text">
                            <h2 className="pb-3">¿Por qué Bona Drinks?</h2>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                        <i><FontAwesomeIcon icon={faShippingFast} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Delivery hasta tu casa</h3>
                                            <p>En muy poco tiempo todos los productos comprados estaran en tu casa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                        <i><FontAwesomeIcon icon={faMoneyBillAlt} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Mejores Precios</h3>
                                            <p>Tenemos los precios mas accesibles respecto a otras tiendas de delivery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                            <i><FontAwesomeIcon icon={faBriefcase} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Ayuda y Consultas</h3>
                                            <p>Mediante WhatsApp solucionaremos todas tus inquietudes rapidamente.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                        <i><FontAwesomeIcon icon={faSyncAlt} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Reembolso</h3>
                                            <p>Si recibiste algun producto no solicitado te lo reembolsamos lo antes posible.
                                            </p>
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

export default aboutUs
