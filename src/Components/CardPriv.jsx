

import React, { Component } from 'react'

export default class CardPriv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            valueCoupon: "",
        };
    }

    changeShowCoupon = () => this.setState({ show: !this.state.show })

    handleInputChange = e => this.setState({ valueCoupon: e.target.value })

    render() {

        const { show, valueCoupon } = this.state;

        return (
            <section className='card_priv__head' >

                <p style={{ cursor: "pointer" }} className="card_priv__title" onClick={this.changeShowCoupon}>
                    <i className={`fa-solid fa-${show ? 'plus' : 'minus'}`}></i> Tarjeta privilegio
                </p>

                <section style={{ display: show ? 'none' : 'flex' }} className='card_priv__' >
                    <p className='card_priv__text' >Número de tarjeta Privilegio</p>
                    <input value={valueCoupon} onChange={this.handleInputChange} className='card_priv__input' placeholder='Número de tarjeta Privilegio' type="text" />
                </section>

            </section>
        )

    }
}