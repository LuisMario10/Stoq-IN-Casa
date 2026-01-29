// Depois implementar uma função de coversao real

export const priceConverter = (priceInCents: number) => {
    if(priceInCents % 100 === 0) return `R$ ${priceInCents / 100},00`;

    return `R$ ${priceInCents / 100}`;
}