import { dataCoins } from "./data-coins.js"

export default function LoadYourCoins() {
    return (
        dataCoins.map(coins => (coins.id + ' ' + coins.name + '\n'))
            .join('')   
    )
}
