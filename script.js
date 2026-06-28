let students = 500;
let companies = 50;
let drives = 25;
let placed = 300;

document.getElementById("students").innerText = students;
document.getElementById("companies").innerText = companies;
document.getElementById("drives").innerText = drives;
document.getElementById("placed").innerText = placed;
function searchStudent() {

    let input = document.getElementById("search").value.toLowerCase();

    let table = document.getElementById("studentTable");

    let tr = table.getElementsByTagName("tr");

    for(let i = 1; i < tr.length; i++){

        let td = tr[i].getElementsByTagName("td")[1];

        if(td){

            let text = td.textContent || td.innerText;

            if(text.toLowerCase().indexOf(input) > -1){

                tr[i].style.display = "";

            }

            else{

                tr[i].style.display = "none";

            }

        }

    }

}

function addStudent(){

    let id = prompt("Enter Student ID");

    let name = prompt("Enter Student Name");

    let dept = prompt("Enter Department");

    let cgpa = prompt("Enter CGPA");

    let status = prompt("Enter Status");

    if(id && name && dept && cgpa && status){

        let table = document
        .getElementById("studentTable")
        .getElementsByTagName("tbody")[0];

        let row = table.insertRow();

        row.insertCell(0).innerHTML = id;
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = dept;
        row.insertCell(3).innerHTML = cgpa;
        row.insertCell(4).innerHTML = status;

    }

}