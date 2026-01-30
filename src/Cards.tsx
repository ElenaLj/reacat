export const cards: Card = [
    {
        id: 0,
        name: "Merlino",
        gender: "M",
        age: 2,
        colour: "Bianco con la coda nera",
        desc: "È un patatone. ",
        image: "https://cdn2.thecatapi.com/images/4os.jpg",
        favToy: "His feathered stick"
    },
    {
        id: 1,
        name: "Milly",
        gender: "F",
        age: 2,
        colour: "Nera e bianca",
        desc: "She is cute - but sassy. Won't let herself be petted unless she really trust you. Cannot blame her tough",
        image: "https://cdn2.thecatapi.com/images/7cn.jpg",
        favToy: "Tiny little swirls"
    },
       {
        id: 2,
        name: "Cinnamon",
        gender: "M",
        age: 1,
        colour: "Orange",
        desc: "lorem ipsum Cannella",
        image: "https://cdn2.thecatapi.com/images/MTc3MjU5NQ.png",
        favToy: "Fish-like kickeroo"
    },
    {
        id: 3,
        name: "Salem",
        gender: "M",
        age: 6,
        colour: "Black",
        desc: "lorem ipsum Salem",
        image: "https://cdn2.thecatapi.com/images/5os.jpg",
        favToy: "His feathered stick"
    },
    {
        id: 4,
        name: "Mochi",
        gender: "F",
        age: 2,
        colour: "Black and white",
        desc: "She is cute - but sassy. Won't let herself be petted unless she really trust you. Cannot blame her tough",
        image: "https://cdn2.thecatapi.com/images/8cn.jpg",
        favToy: "Tiny little swirls"
    },
    {
        id: 5,
        name: "Tofu",
        gender: "M",
        age: 1,
        colour: "Orange",
        desc: "lorem ipsum Cannella",
        image: "https://cdn2.thecatapi.com/images/46n.jpg",
        favToy: "Fish-like kickeroo"
    },
    {
        id: 6,
        name: "Bisou",
        gender: "M",
        age: 1,
        colour: "Orange",
        desc: "lorem ipsum Cannella",
        image: "https://cdn2.thecatapi.com/images/39n.jpg",
        favToy: "Fish-like kickeroo"
    },
    {
    id: 7,
    name: "Pepo",
    gender: "M",
    age: 1,
    colour: "Orange",
    desc: "lorem ipsum Cannella",
    image: "https://cdn2.thecatapi.com/images/75n.jpg",
    favToy: "Fish-like kickeroo"
    },
];

export type Card = {
    id: number,
    name: string,
    gender: "M" | "F";
    age: number,
    colour: string,
    desc: string,
    image: string,
    favToy: string
}[];