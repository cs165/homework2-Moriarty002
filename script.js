// TODO(you): Write the JavaScript necessary to complete the homework.
var S1,S2,S3;
S1=0;S2=0;S3=0;
var T=[0,0,0,0,0,0,0,0,0];
var U;
function C_SoNS(envent)
{
    x = event.currentTarget;
    var i, j;
    j = x.dataset.questionId;
    switch (j) {
        case "one" :
            S1 = 1;
            U=5;
            break;
        case "two" :
            S2 = 1;
            U=4;
            break;
        case "three" :
            S3 = 1;
            U=3;
            break;
    } //check END
    for (i = 0; i < 27; i++) {
        if (choice_h[i].dataset.questionId === j) {
            toNS(choice_h[i]);
        }
    }
    toS(x);
    if (S1 + S2 + S3 === 3)
    {
        Endtest();
    }
}
function toS(space) //change div to selected
{
    space.style.opacity="1";
    space.style.background='#cfe3ff';
    space.getElementsByClassName("checkbox")[0].src="images/checked.png";
    switch (space.dataset.choiceId) {
        case "blep":
            T[0]+=U;
            break;
        case "burger":
            T[1]+=U;
            break;
        case "cart":
            T[2]+=U;
            break;
        case "dopey":
            T[3]+=U;
            break;
        case "happy":
            T[4]+=U;
            break;
        case "nerd":
            T[5]+=U;
            break;
        case "shy":
            T[6]+=U;
            break;
        case "sleeping":
            T[7]+=U;
            break;
        case "sleepy":
            T[8]+=U;
            break;
    }
}
function toNS(space) //change div to unselected
{
    space.style.opacity="0.6";
    const image=document.createElement('img');
    image.src="images/unchecked.png";
    if(space.getElementsByClassName("checkbox")[0].src != image.src)
    {
        space.style.background = '#f4f4f4';
        space.getElementsByClassName("checkbox")[0].src = image.src;
        switch (space.dataset.choiceId) {
            case "blep":
                T[0] -=U;
                break;
            case "burger":
                T[1] -=U;
                break;
            case "cart":
                T[2] -=U;
                break;
            case "dopey":
                T[3] -=U;
                break;
            case "happy":
                T[4] -=U;
                break;
            case "nerd":
                T[5] -=U;
                break;
            case "shy":
                T[6] -=U;
                break;
            case "sleeping":
                T[7] -=U;
                break;
            case "sleepy":
                T[8] -=U;
                break;
        }
    }
}
function Endtest() {
    for (const choice of choice_h)
    {
        choice.removeEventListener('click', C_SoNS );
    }
    var answer;
    answer= CheckChampion();
    ShowEnding(answer);
}
function CheckChampion() {
    var i,index,value;
    value=0;
    for (i=0;i<9;i++)
    {
        if(T[i]>value)
        {
            value=T[i];
            index=i;
        }
    }
    return index;
}
function ShowEnding(a) {
    var space=document.getElementById("show");
    var head=document.getElementById("title");
    var con=document.getElementById("contents");
    space.style.visibility="visible";
    switch (a) {
        case 0:
            A="blep";
            break;
        case 1:
            A="burger";
            break;
        case 2:
            A="cart";
            break;
        case 3:
            A="dopey";
            break;
        case 4:
            A="happy";
            break;
        case 5:
            A="nerd";
            break;
        case 6:
            A="shy";
            break;
        case 7:
            A="sleeping";
            break;
        case 8:
            A="sleepy";
            break;
    }
    head.innerHTML="You got : "+RESULTS_MAP[A].title;
    con.innerHTML=RESULTS_MAP[A].contents;
}
const choice_h=document.querySelectorAll('section.choice-grid > div.container');
for (const choice of choice_h)
{
    choice.addEventListener('click', C_SoNS );
}
document.getElementById("btn").onmouseover=function() {
    document.getElementById("btn").style.background="#e0e0e0";
}
document.getElementById("btn").onmouseout=function () {
    document.getElementById("btn").style.background="#cecece";
}
document.getElementById("btn").onmouseup=function () {
    window.location.reload();
}
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
