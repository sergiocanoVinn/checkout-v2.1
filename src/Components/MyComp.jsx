

import React, { Component } from 'react'

export default class MyComp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { mess } = this.props;
        console.log({ mess })
        return (
            <section className='card_priv__head' >
                ✅ { mess }!!! from REACT ✅​
            </section>
        )

    }
}