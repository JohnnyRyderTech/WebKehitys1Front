document.addEventListener("DOMContentLoaded", function () {


  // Exercise 1
  const alertBtn = document.getElementById("alertBtn");
  const tableBtn = document.getElementById("tableBtn");
  const geoBtn = document.getElementById("geoBtn");

  if (alertBtn) {
    alertBtn.addEventListener("click", function () {
      alert("You clicked me! " + new Date());
    });
  }

  if (tableBtn) {
    tableBtn.addEventListener("click", function () {
      document.write("<h2>Employee Table</h2>");
      document.write("<table border='1' cellpadding='5'>");
      document.write("<tr><th>Name</th><th>Position</th><th>Salary</th></tr>");
      document.write("<tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>");
      document.write("<tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>");
      document.write("<tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>");
      document.write("<tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>");
      document.write("<tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr>");
      document.write("</table>");
    });
  }

  if (geoBtn) {
    geoBtn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        alert("Geolocation not supported.");
        return;
      }

      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        document.getElementById("location").innerHTML =
          "Latitude: " + lat + "<br>Longitude: " + lon;

        window.location.href =
          "https://www.google.com/maps?q=" + lat + "," + lon;
      });
    });
  }


  // Exercise 2
  const exercise2Heading = document.getElementById("exercise2Heading");

  if (exercise2Heading) {
    exercise2Heading.addEventListener("mouseover", function () {
      console.log("Stepped over my a mouse!");
    });

    exercise2Heading.addEventListener("mouseout", function () {
      alert("Bye bye mouse!");
    });
  }


  // Exercise 3
  const form = document.getElementById("exercise3Form");
  const textarea = document.getElementById("textdata");
  const charcount = document.getElementById("charcount");

  let keyPressCount = 0;
  const helperMessage = "Please fill in the form with proper data.";

  if (textarea) {

    textarea.addEventListener("focus", function () {
      if (textarea.value.trim() === "") {
        textarea.value = helperMessage;
        textarea.style.color = "gray";
      }
      textarea.style.backgroundColor = "#f0f8ff";
    });

    textarea.addEventListener("keydown", function () {
      if (textarea.value === helperMessage) {
        textarea.value = "";
        textarea.style.color = "black";
      }

      keyPressCount++;
      charcount.textContent = "Keypresses: " + keyPressCount;
    });

    textarea.addEventListener("blur", function () {
      textarea.style.backgroundColor = "";

      if (textarea.value.trim() === "") {
        textarea.value = "";
        textarea.style.color = "black";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const value = textarea.value.trim();

      if (value === "" || value === helperMessage) {
        alert("Textarea is empty. Please write something before sending.");
      } else {
        alert("Thanks! Your message was sent (demo).");
      }
    });
  }


  // Exercise 4
  const coordinateBox = document.getElementById("coordinates");
  const coordsHeading = document.getElementById("coords");

  if (coordinateBox) {

    coordinateBox.addEventListener("mousemove", function (event) {

      const rect = coordinateBox.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      console.log("X:", x, "Y:", y);

      if (coordsHeading) {
        coordsHeading.innerHTML = "Mouse position: X = " + x + ", Y = " + y;
      }
    });

  }

});