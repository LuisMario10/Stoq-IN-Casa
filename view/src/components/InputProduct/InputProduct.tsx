import { useState } from "react";

import InputProductStyles from "./InputProduct.module.css"

interface IInputProductProps {
    onSearch(name: string): void;
}


export const InputProduct = ({ onSearch }: IInputProductProps) => {

    const [productName, setProductName] = useState('');

    const handleSearch = (name: string) => {
        onSearch(name);
        setProductName('');
    }

    return (
        <div className={ InputProductStyles.inputProductContainer }>
            <div className={ InputProductStyles.inputArea }>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={ productName } 
                    onChange={ (event) => setProductName(event.target.value) }
                />
            </div>
            <div className={ InputProductStyles.buttonsArea }>
                <button onClick={ () => setProductName('') }>
                    Limpar
                </button>

                <button onClick={ () => handleSearch(productName) }>
                    pesquisar
                </button>
            </div>
        </div>
    );
}