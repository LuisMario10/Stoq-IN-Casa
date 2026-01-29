import { useState } from "react"

import { PageLayout } from "../../shared/layouts"
import { InputProduct } from "../../components"

import HomePageStyle from "./Home.module.css"


export interface IProduct {
    id: string;
    name: string;
    priceAverangeInCents: number
}

export const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([
        { id: "1", name: "Pacote de Arroz 1kg", priceAverangeInCents: 1000 }
    ]);

    const handleSearch = (productName: string) => {
        setProducts([...products.filter(product => product.name === productName)])
    }

    return (
        <PageLayout pageTitle="Home">
            <div className={ HomePageStyle.homePageContainer }>

                <InputProduct onSearch={ handleSearch }/>

                <ol>

                </ol>
            </div>
        </PageLayout>
    )
}