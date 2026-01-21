export const cats: Cat = [
    {
        id: 0,
        name: "Merlino",
        gender: "M",
        age: 2,
        colour: "white and black",
        desc: "lorem ipsum Merlino",
        image: "https://cdn2.thecatapi.com/images/4os.jpg"
    },
    {
        id: 1,
        name: "Milly",
        gender: "F",
        age: 2,
        colour: "black and white",
        desc: "lorem ipsum Milly",
        image: "https://cdn2.thecatapi.com/images/7cn.jpg"
    },
       {
        id: 2,
        name: "Cannella",
        gender: "F",
        age: 2,
        colour: "grigio",
        desc: "lorem ipsum Cannella",
        image: "https://cdn2.thecatapi.com/images/7an.jpg"
    },
];

type Cat = {
    id: number,
    name: string,
    gender: "M" | "F";
    age: number,
    colour: string,
    desc: string,
    image: string
}[];