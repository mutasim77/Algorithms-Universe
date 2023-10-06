import { Cards } from 'nextra/components'
import { homeCardsInfo } from '../../constants';
import Image from 'next/image';

import styles from '../../styles/HomeCards.module.css';

const HomeCards = () => {
    return (
        <Cards>
            {homeCardsInfo.map((item) => (
                <ShowcaseCard title={item.title} href={`/algorithms/${item.href}`}>
                    <Image
                        className={styles.img}
                        src={item.image.src}
                        alt={`${item.title} preview`}
                        width={453}
                        height={294}
                    />
                </ShowcaseCard>
            ))}
        </Cards >
    )
}

const ShowcaseCard = Object.assign(
    Cards.Card.bind({}),
    {
        displayName: 'ShowcaseCard',
        defaultProps: {
            image: true,
            arrow: true,
        }
    }
)

export default HomeCards;