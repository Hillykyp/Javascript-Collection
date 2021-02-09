function validate() {
    var username = document.getElementById('uname').value;

    var regx = /CT102/;
    if (regx.test(username)) {
        alert('Valid Username');
    } else {
        // alert('Invalid Username');
        document.getElementById('ibluser').style.visibility = "visible";
    }

}