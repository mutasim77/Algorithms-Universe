import { Card, Cards } from 'nextra/components'

interface cardsProps {
    title: string,
    href: string
}

const cardsInfo: cardsProps[] = [
    {
        title: 'Bubble Sort',
        href: 'sorts/bubble-sort'
    },
    {
        title: 'Selection Sort',
        href: 'sorts/selection-sort'
    },
    {
        title: 'Insertion Sort',
        href: 'sorts/insertion-sort'
    },
    {
        title: 'Merge Sort',
        href: 'sorts/merge-sort'
    },
    {
        title: 'Quick Sort',
        href: 'sorts/quick-sort'
    },
    {
        title: 'Heap Sort',
        href: 'sorts/heap-sort'
    },
    {
        title: 'Radix Sort',
        href: 'sorts/radix-sort'
    },
    {
        title: 'Bucket Sort',
        href: 'sorts/bucket-sort'
    },
    {
        title: 'Counting Sort',
        href: 'sorts/counting-sort'
    },
    {
        title: 'Timsort Sort',
        href: 'sorts/timsort'
    },
    {
        title: 'Cocktail Shaker Sort',
        href: 'sorts/cocktail-shaker-sort'
    },
    {
        title: 'Gnome Sort',
        href: 'sorts/gnome-sort'
    },
]

const CardsList = () => {

    return (
        <>
            {cardsInfo.map((item) => (
                <Card
                    title={item.title}
                    href={item.href}
                />
            ))}
        </>
    )
}

export default CardsList;
