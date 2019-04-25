// TODO(you): Write the JavaScript necessary to complete the homework.
function C_SoNS(envent)
{
    x=event.currentTarget;
    var i;
    for(i=0;i<27;i++)
    {
        if(choice_h[i].dataset.questionId === x.dataset.questionId)
        {
            toNS(choice_h[i]);
        }
    }
    toS(x);
}
function toS(space) //change div to selected
{
    space.style.background='#cfe3ff';
    space.getElementsByClassName("checkbox")[0].src="images/checked.png";
}
function toNS(space) //change div to unselected
{
    space.style.background='#f4f4f4';
    space.getElementsByClassName("checkbox")[0].src="images/unchecked.png";
}

const choice_h=document.querySelectorAll('section.choice-grid > div.container');
for (const choice of choice_h)
{
    choice.addEventListener('click', C_SoNS );
}
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
