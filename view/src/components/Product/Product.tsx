import { useState } from 'react'

import ProductStyles from './Product.module.css'
import { priceConverter } from '../../functions';


interface IProductProps {
    name: string;
    quantity: number;
    priceAverangeInCents: number;

    onAddList(): void;
    onRemoveList(): void
}

export const Product = ({ name, quantity, priceAverangeInCents, onAddList, onRemoveList }: IProductProps) => {

    const [isInList, setIsInList] = useState(false)    

    const handleAdd = () => {
        onAddList();
        setIsInList(true);
    }

    const handleRemove = () => {
        onRemoveList();
        setIsInList(false)
    }

    return (
        <div className={ ProductStyles.productContainer }>

            <div className={ ProductStyles.productDatas }>

                <div className={ ProductStyles.productNameArea }>
                    <span className={ ProductStyles.productName }> 
                        Nome do produto: { name } 
                    </span>
                </div>

                <div className={ ProductStyles.productQuantity }>
                    { isInList  ? <span>Quantidade: { quantity }</span> : '' }
                </div>

                <div>
                    <span>Media de Preco: { priceConverter(priceAverangeInCents) }</span>
                </div>
            </div>
            <div className={ ProductStyles.buttonField }>
                { 
                    !isInList ? 

                        <button onClick={ handleAdd }>adicionar</button> 
                        : 
                        <button onClick={ handleRemove }>remover</button>
                }
            </div>
        </div>
    );
}