import { Card } from 'nextra/components';
import { cardsProps } from '../../types';

const CardsList = ({ data }: { data: cardsProps[] }): JSX.Element => {
    return (
        <>
            {data.map((item, inx) => (
                <Card
                    key={inx}
                    children={<></>}
                    title={item.title}
                    href={item.href}
                    icon={<></>}
                />
            ))}
        </>
    )
}

export default CardsList;
