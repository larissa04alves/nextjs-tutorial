import Link from "next/link"

interface Drink {
    idDrink: string;
    strDrink: string;
}

interface DrinksListProps {
    drinks: Drink[];
}

const DrinksList: React.FC<DrinksListProps> = ({ drinks }) => {
    return (
        <ul className="menu menu-vertical pl-0">
            {drinks.map((drink) => (
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">
                        {drink.strDrink}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default DrinksList
