/*
function buttonClick(){
    document.getElementById("heading1").innerHTML = "31st December 2020.";
}
*/

function fn1() {
    var str = document.getElementById("txt1").value;
    let kit = document.getElementById("pss1").value;
    alert("The username and Password  is:" + str + ' ' + kit);

}


function fn2() {
    let rd1 = document.getElementById("rd1");
    let rd2 = document.getElementById("rd2");
    let rd3 = document.getElementById("rd3");
    let rd4 = document.getElementById("rd4");
    if (rd1.checked == true) {
        alert("The skill selected is : " + rd1.value)
    } else if (rd2.checked == true) {
        alert("The skill selected is : " + rd2.value)
    } else if (rd3.checked == true) {
        alert("The skill selected is : " + rd3.value)
    } else if (rd4.checked == true) {
        alert("The skill selected is : " + rd4.value)
    } else {
        alert("You have not selected any skill.")
    }

}

function fn3() {
    var select = document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value)
}

function changeStyling() {
    var para = document.getElementsByTagName("p");
    //  para[0].style.fontSize = 40;
    // para[1].style.color = "blue";
    // para[2].style.fontWeight = "bold ";
    // para[3].style.fontStyle = "italic ";
    for (var i = 0; i < para.length; i++) {
        para[i].style.fontWeight = "bold";
    }

}

function changeStyle() {
    var element = document.getElementsByClassName("mypara");
    for (var x = 0; x < element.length; x++) {
        element[x].style.color = "yellow";
    }
}


function setNewImage() {
    document.getElementById("img1").src = "fauna.jpg";

}

function setOldImage() {
    // alert();
    document.getElementById("img1").src = "hosealogo.jpg";
}


function congratsMen() {
    const PI = 3.14;
    let r = 10;
    let areCircle = PI * r * r;
    document.write("The area of a circle is: " + areCircle);
}