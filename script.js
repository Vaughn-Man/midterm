document.getElementById("submit").onclick = function () {

  
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var fname = row.insertCell(0);
    var mname = row.insertCell(1);
    var lname = row.insertCell(2);
    var age = row.insertCell(3);
    var gender = row.insertCell(4);
    var birth = row.insertCell(5);
    var course = row.insertCell(6);
    var year = row.insertCell(7);

    fname.innerHTML = document.getElementById("fname").value;
    mname.innerHTML = document.getElementById("mname").value;
    lname.innerHTML = document.getElementById("lname").value;
    age.innerHTML = document.getElementById("age").value;
    gender.innerHTML = document.getElementById("gender").value;
    birth.innerHTML = document.getElementById("birth").value;
    course.innerHTML = document.getElementById("course").value;
    year.innerHTML = document.getElementById("year").value;
   
    return false;
  }

  function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
