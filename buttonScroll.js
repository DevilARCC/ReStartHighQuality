const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

function val1() {
    v1 = document.getElementById("anchor").value;
    if (v1 == "")
        alert("Заполните поле Email!")
}

function viewOfInfo1() {
    Block1 = document.getElementById("ViewInfo1").value;
    alert("Block about library")
}
function viewOfInfo2() {
    Block2 = document.getElementById("ViewInfo2").value;
    alert("Block about books")
}
function viewOfInfo3() {
    Block3 = document.getElementById("ViewInfo3").value;
    alert("Block about future")
}
function viewOfInfo4() {
    Block4 = document.getElementById("ViewInfo4").value;
    alert("Block about notebook")
}
function startOfView() {
    let i = 0;
    while (i < 1) {
        alert("Julian HardCock");
        alert("Julian Jameson");
        alert("Maison Jameson");
        alert("Julian Lawson");
        i++;
    }
}
function Input(){
login_ok = false;
user_name = "";
password = "";
user_name = prompt("Логин","");
user_name = user_name.toLowerCase();
password = prompt("Пароль","");
password = password.toLowerCase();
if (user_name=="3650" && password=="1234") {
    login_ok = true;
}
if (user_name=="apsasinka" && password=="4321") {
    login_ok = true;
}

    if (login_ok == false) alert("Неверный логин или пароль!");
    else alert("Добро пожаловать!");
}