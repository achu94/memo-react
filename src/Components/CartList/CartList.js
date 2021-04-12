import Cart from './Cart/Cart';

import './CartList.css';

const CartList = () => {

    const LeistungArr = [
        {
            header: 'Wandsysteme',
            body: "Wandsysteme erfahrung"
        },
        {
            header: 'Wandsysteme 2',
            body: "Wandsysteme erfahrung 2"
        },
        {
            header: 'Wandsysteme 3',
            body: "Wandsysteme erfahrung 3"
        },
        {
            header: 'Wandsysteme 4',
            body: "Wandsysteme erfahrung 4"
        },
        {
            header: 'Wandsysteme 5',
            body: "Wandsysteme erfahrung 5"
        },
        {
            header: 'Wandsysteme 6',
            body: "Wandsysteme erfahrung 6"
        },
        {
            header: 'Wandsysteme 7',
            body: "Wandsysteme erfahrung 7"
        },
        {
            header: 'Wandsysteme 8',
            body: "Wandsysteme erfahrung 8"
        }
    ]

    return (
        <div className="main">
            <h1>Leistungen</h1>
            <div className="CartList">
                {
                    LeistungArr.map((element) => {
                        return <Cart header={element.header} body={element.body} />;
                    })
                }
            </div>

        </div>
    );
}

export default CartList;