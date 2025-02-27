import { FC } from 'react';

interface SingleDrinkPageProps {
    params: {
        id: string;
    };
}

const SingleDrinkPage: FC<SingleDrinkPageProps> = ({ params }) => {
    console.log(params.id);

    return (
        <div>SingleDrinkPage</div>
    );
};

export default SingleDrinkPage;