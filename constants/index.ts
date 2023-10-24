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
            title: 'Timsort',
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
        {
            title: 'Humor Sorts',
            href: 'sorts/humor-sorts',
        },
        {
            title: 'Bogosort',
            href: 'sorts/bogo-sort',
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
            href: 'searches/dfs',
        },
        {
            title: 'Breadth-First Search',
            href: 'searches/bfs',
        },
        {
            title: 'A* Search',
            href: 'searches/a-star-search',
        },
        {
            title: "Dijkstra's Algorithm",
            href: 'searches/dijkstra',
        }
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