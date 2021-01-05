var menu = ["Margaritta Pizza",
"Hawaian Pizza",
"Farm Fresh Pizza",
"Pepporoni Pizza",
"Corn n' Panneer Pizza",];

function viewmenu(){

    document.getElementById("menulist").innerHTML = menu
}

function additem() {
    {
var newpizza
    }

    documement.getElementById("add_item").value = newpizza ;

    menu.push(newpizza);

    document.getElementById("menulist").innerHTML = menu;

    document.getElementById("newmenu").innerHTML = menu;


}


