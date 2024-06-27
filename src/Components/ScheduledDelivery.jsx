import React, { Component } from "react";
import { uniqueId } from "../Utils/id";

export default class ScheduledDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {

            address: [],
            selectedAddress: "",
        };
    }

    componentDidMount() {
        this.disabledBtn()

        this.setState({
            address: vtexjs.checkout.orderForm.shippingData.availableAddresses
        });
    }

    handleSelectedAddress = e => {
        this.setState({
            selectedAddress: e.target.value,
        });
        $(`.address-item.vtex-omnishipping-1-x-addressItemOption[data-testid='address-item-${e.target.value}']`).click()
    }

    componentDidUpdate = ( ) => this.disabledBtn()

    disabledBtn(){
        const select = $("#vtex-omnishipping-1-x-selectAddres_custom__");
        const btn = document.getElementById("btn-go-to-payment");

        if (btn) {
            if(select.val() === "" || select.val() === undefined){
                btn.disabled = true;
            } else {
                btn.disabled = false;
            }
        }
    }

    render() {
        const { address, selectedAddress } = this.state;

        return (
            <div className="vtex-omnishipping-1-x-deliveryGroup-custom__">
                
                <div>
                    <h2 className="vtex-omnishipping-1-x-title-custom__">Direcciones guardadas</h2>
                </div>
                <div>
                    <select id="vtex-omnishipping-1-x-selectAddres_custom__" value={selectedAddress} onChange={this.handleSelectedAddress}>

                        <option value="" selected>
                            Elige la direccíon
                        </option>

                        {
                            address.map( address_ => 
                                <option key={uniqueId()} value={address_.addressId}>
                                    {address_?.pruebas && address_?.pruebas+", "} {address_?.number && "No. "+address_?.number+", " } {address_?.city && address_?.city+", " }
                                    {address_?.postalCode && "cp: "+address_?.postalCode+","} {address_?.state && address_?.state+"."}
                                </option>
                            )
                            
                        }
                    </select>
                </div>
                        
            </div>
        );
    }
}
