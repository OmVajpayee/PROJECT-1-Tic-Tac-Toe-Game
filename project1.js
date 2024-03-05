let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#bt");
let nwgame=document.querySelector("#new");
let msgcont=document.querySelector(".msg");
let mg=document.querySelector("#message");
let turn0=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcont.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        cwinner();
    });
});

const disablebox=()=>{
    for(let box of boxes)
    box.disabled = true;
};
const enablebox=()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText="";
    }
};

const show =(winner) => {
    mg.innerText = `Congratualations,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebox();
};

const cwinner  = ()  => {
    for( let pattern of win)
    {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if(p1 != ""&& p2 != ""&& p3 != ""){
            if(p1===p2 && p2===p3){
                console.log("Winner",p1);
                show(p1);
            }
        }
    }
};


nwgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
