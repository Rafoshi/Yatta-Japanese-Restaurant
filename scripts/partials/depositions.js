const sectionDepositions = document.querySelector("main.depositions")
const cardDeposition = document.querySelector("article.deposition")

const depositions = [
    {
        image: "./assets/pfp.png",
        name: "Adriana",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ligula magna, at consequat arcu dignissim vitae. Vivamus tempor malesuada purus. Praesent non lobortis nibh. Proin iaculis ipsum nisl, vel malesuada est porta non. Proin eget nisl commodo, ultricies risus vel, finibus orci."
    },
    {
        image: "./assets/pfp.png",
        name: "Luiz",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ligula magna, at consequat arcu dignissim vitae. Vivamus tempor malesuada purus. Praesent non lobortis nibh. Proin iaculis ipsum nisl, vel malesuada est porta non. Proin eget nisl commodo, ultricies risus vel, finibus orci."
    },{
        image: "./assets/pfp.png",
        name: "André",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ligula magna, at consequat arcu dignissim vitae. Vivamus tempor malesuada purus. Praesent non lobortis nibh. Proin iaculis ipsum nisl, vel malesuada est porta non. Proin eget nisl commodo, ultricies risus vel, finibus orci."
    }
];

depositions.map(deposition => {
    const depositionClone = cardDeposition.cloneNode(true);
    depositionClone.querySelector("img").src = deposition.image;
    depositionClone.querySelector("h3").innerHTML = deposition.name;
    depositionClone.querySelector(".deposition-text").innerHTML = deposition.text;
    sectionDepositions.appendChild(depositionClone);
});

cardDeposition.remove();