import { useState } from 'react';

const IsHome = () => {

    const [isHome, setIsHome] = useState(window.location.pathname);

    return {isHome, setIsHome};
}

export default IsHome;