function validate() {
    var uname = document.getElementById("uname");
    var password = document.getElementById("pass");

    if (uname.value.trim() == "") {
        // alert('Blank Username');
        uname.style.border = "solid 3px red"
        document.getElementById("ibluser").style.visibility = "visible";

        return false;
    } else if (uname.value.trim() == "") {
        alert('Blank Password');
        return false;
    } else if (password.value.trim().length < 5) {
        alert("Password Too short");
        return false;
    } else {
        return true;
    }
}