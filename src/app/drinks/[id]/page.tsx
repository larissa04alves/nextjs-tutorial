import Link from 'next/link';
import Image from 'next/image';
import imgDrink from './imgDrink.jpg';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleDrink = async (id: string): Promise<any> => {
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch a drink...');
    }
    return res.json();
};

interface SingleDrinkPageProps {
    params: {
        id: string;
    };
}

const SingleDrinkPage = async ({ params }: SingleDrinkPageProps) => {
    const data = await getSingleDrink(params.id);
    const title = data?.drinks?.[0]?.strDrink;
    const imgSrc = data?.drinks?.[0]?.strDrinkThumb;
    return (
        <div>
            <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
                Back to drinks
            </Link>
            <h1 className='text-4xl mb-8'>{title}</h1>
            <Image src={imgDrink} className='w-56 h-5w-56 rounded' alt='drink' />
        </div>
    );
};

export default SingleDrinkPage;
