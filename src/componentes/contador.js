import React from 'react';
import '../holas-de-estilo/contador.css';

function Contador({ numClics }) {
    return (
        <div className='contador'>
            {numClics}
        </div>
    )
}

export default Contador;