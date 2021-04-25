import Cart from './Cart/Cart';

import './CartList.css';

const CartList = () => {

    const LeistungArr = [
        {
            header: 'Wandsysteme',
            body: "Die Montage von Wandsystemen bildet seit unserer Firmengründung einen Schwerpunkt unseres Leistungsspektrums. Dabei stehen klassische Produkte wie standardisierte Metallständerwände neben anspruchsvollen, individuellen Lösungen."
        },
        {
            header: 'Deckensysteme',
            body: "Deckensysteme und Deckenbekleidungen bieten moderne Lösungen für viele Anforderungen und Einsatzgebiete im Trockenbau."
        },
        {
            header: 'Fußbodensysteme',
            body: "Wandsysteme erfahrung 2"
        },
        {
            header: 'Akustik',
            body: "Wandsysteme erfahrung 4"
        },
        {
            header: 'Brandschutz',
            body: "Wandsysteme erfahrung 8"
        },
        {
            header: 'Innenausbau',
            body: "Wandsysteme erfahrung 8"
        }
    ]

    return (
        <div className="CartList">
            {
                LeistungArr.map((element) => {
                    return <Cart header={element.header} body={element.body} />;
                })
            }
        </div>
    );
}

export default CartList;