import { cardsProps } from "../types";
import { sortsImg, searchesImg, stringMatching } from "../public/assets";

interface cardInfoProps {
    sorts: cardsProps[],
    searches: cardsProps[],
    stringMatching: cardsProps[],
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
            title: 'Bogosort',
            href: 'sorts/bogo-sort',
        },
        {
            title: 'Humor Sorts',
            href: 'sorts/humor-sorts',
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
            title: 'Jump Search',
            href: 'searches/jump-search',
        },
        {
            title: 'Exponential Search',
            href: 'searches/exponential-search',
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
        },
        {
            title: "Depth-Limited Search",
            href: 'searches/depth-limited-search',
        },
        {
            title: "Iterative Deepening search",
            href: 'searches/iterative-deepening-search',
        }
    ],
    stringMatching: [
        {
            title: 'Brute-Force String Matching',
            href: 'string-matching/brute-force',
        },
        {
            title: 'Knuth-Morris-Pratt (KMP) Algorithm',
            href: 'string-matching/kmp',
        },
    ]
};

export const homeCardsInfo = [
    {
        title: 'Sorts',
        href: 'sorts',
        image: sortsImg
    },
    {
        title: 'Searches',
        href: 'searches',
        image: searchesImg
    },
    {
        title: 'String Matching Algorithms',
        href: 'string-matching',
        image: stringMatching
    },
];