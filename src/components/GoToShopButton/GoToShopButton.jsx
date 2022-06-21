import React from 'react'
import { Link } from 'react-router-dom'
import './GoToShopButton.scss'

function GoToShopButton(props) {
    return (
        <>
            {props.black == 'no' ?
                <Link to={"/shop"}>
                    <a className="boxed-btn"><svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stop-color="#dfe0db" />
                                <stop offset="100%" stop-color="#44eca6" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                        <span>Nuestras bebidas</span>
                    </a>
                </Link>
                :
                <Link to={"/shop"}>
                    <a className="boxed-btn"><svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#043d4e" />
                                <stop offset="100%" stopColor="#043d4e" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                        <span className='span2'>Ir a la Tienda</span>
                    </a>
                </Link>
        }
        </>
    );
}

export default GoToShopButton;

