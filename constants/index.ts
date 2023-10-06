import { cardsProps } from "../types";
import { sorts, searches } from "../public/assets";

interface cardInfoProps {
    sorts: cardsProps[],
    searches: cardsProps[],
}

export const cardsInfo: cardInfoProps = {
    sorts: [
        {
            title: 'Bubble Sort',
            href: 'sorts/bubble-sort',
        },
        {
            title: 'Selection Sort',
            href: 'sorts/selection-sort',
        },
        {
            title: 'Insertion Sort',
            href: 'sorts/insertion-sort',
        },
        {
            title: 'Merge Sort',
            href: 'sorts/merge-sort',
        },
        {
            title: 'Quick Sort',
            href: 'sorts/quick-sort',
        },
        {
            title: 'Heap Sort',
            href: 'sorts/heap-sort',
        },
        {
            title: 'Radix Sort',
            href: 'sorts/radix-sort',
        },
        {
            title: 'Bucket Sort',
            href: 'sorts/bucket-sort',
        },
        {
            title: 'Counting Sort',
            href: 'sorts/counting-sort',
        },
        {
            title: 'Timsort Sort',
            href: 'sorts/timsort',
        },
        {
            title: 'Cocktail Shaker Sort',
            href: 'sorts/cocktail-shaker-sort',
        },
        {
            title: 'Gnome Sort',
            href: 'sorts/gnome-sort',
        },
    ],
    searches: [
        {
            title: 'Linear Search',
            href: 'searches/linear-search',
        },
        {
            title: 'Binary Search',
            href: 'searches/binary-search',
        },
        {
            title: 'Depth-First Search',
            href: 'searches/dfs-search',
        },
        {
            title: 'Breadth-First Search',
            href: 'searches/bfs-search',
        },
        {
            title: 'A* Search',
            href: 'searches/a-star-search',
        },
        {
            title: "Dijkstra's Algorithm",
            href: 'searches/dijkstra',
        },
        {
            title: 'Depth-Limited Search',
            href: 'searches/depth-limited-search',
        },
        {
            title: 'Iterative Deepening Search',
            href: 'searches/iterative-deepening-search',
        },
        {
            title: 'Jump Search',
            href: 'searches/jump-search',
        },
        {
            title: 'Exponential Search',
            href: 'searches/exponential-search',
        },
    ]
};

export const homeCardsInfo = [
    {
        title: 'Sorts',
        href: 'sorts',
        image: sorts
    },
    {
        title: 'Searches',
        href: 'searches',
        image: searches
    },
];