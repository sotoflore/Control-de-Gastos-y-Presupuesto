import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    label?: string;
    amount: number
}

export const AmountDisplay = ({label, amount}: AmountDisplayProps) => {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {/* {label}: {''} */}
            {label && `${label}:`}
            <span className="font-black text-black">{formatCurrency(amount)}</span>
       </p>
    )
}
