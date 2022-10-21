import React from "react";
import styles from "./ShoppingCar.module.css";


interface Props {

}

interface State {
    isOpen: boolean;
}
class ShoppingCart extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div className={styles.cartContainer}>  
                <button className={styles.button}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen });
                    }}
                >
                    购物车2件商品
                </button>
                <div className={styles.cartDropDown}
                    style ={{ display: this.state.isOpen ? 'block' : 'none'}}
                >
                    <ul>
                        <li>Robot 1</li>
                        <li>Robot 2</li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}
export default ShoppingCart
