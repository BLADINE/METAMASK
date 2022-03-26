const exchange = 0.032;
var operationList=[];
document.getElementById("menu-icon").addEventListener('click',displayMenuList);
function displayMenuList(){
    var element = document.getElementById("menu-list");
    if (element.style.display=="none") element.style.display="flex";
    else{
        element.style.display="none";
    }
} ;
function displayList(){
    operationList.forEach(elt => {
            const para = document.createElement("div");
            const node = document.createTextNode(elt.purchase+' '+elt.price+'$');
            para.appendChild(node);

            const element = document.getElementById("operation");
            element.appendChild(para);
        });
}
function displayBlock(choiceBtn){
    var element=document.getElementById('choice-click');
    for (const elt of element.children) {
        if(elt.id==choiceBtn.innerHTML.toLowerCase()){
            elt.style.display="flex"
        }
        else{
            elt.style.display="none"
        }
    }
}
function buyEtherium(event){
    event.preventDefault();
    var value=parseFloat(document.forms["buy"]["amount"].value);
    if (value==0){
        alert("write an amount none zero")
        return false
    }
    operationList.unshift({purchase:"purchase",price:value*exchange})
    
    document.forms["buy"]["amount"].value='';
    console.log(operationList)
    displayList();
}

