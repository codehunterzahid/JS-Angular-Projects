const regId = document.querySelector("#registeration-id");
const password = document.querySelector("#password");
const adp = document.querySelector("#adpRadio");
const inter = document.querySelector("#interRadio");
const submitBtn = document.querySelector(".my-btn");
const detailTable = document.querySelector("#detailsTable");
const detailBody = document.querySelector("#detailsBody");
const studentInfo = document.querySelector("#studentInfo");

// Fetching student data from json file by using fetch method
function fetchGradeData() {
  return fetch("../grade.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching grade data:", error);
    });
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if(!adp.checked){
    alert("Only for Section A");
    return;
  }


  fetchGradeData().then((data) => {
    const student = data["student-data"].find(
      (student) =>
        student["Registration ID"] === parseInt(regId.value) &&
        student["password"] === parseInt(password.value)
    );

    if (student) {
        regId.value = "";
      password.value = "";

      // Display student details
      displayStudentDetails(student);

      // Scroll to the result section
      scrollToSection();
      
    } else {
      alert("Invalid Registration ID or Password");
    }
  });
  
});

function displayStudentDetails(student) {
  detailBody.innerHTML = "";

  // Display student information
  studentInfo.innerHTML = `
    <p><strong>Student Name:</strong> ${student["full-name"]}</p>
    <p><strong>Father Name:</strong> ${student["father-name"]}</p>
    <p><strong>Registration No:</strong> ${student["Registration ID"]}</p>
    <p><strong>Section:</strong> ${student["Section"]}</p>
  `;

  // Display subject details in the table
  for (const subject in student) {
    if (
      subject !== "id" &&
      subject !== "full-name" &&
      subject !== "father-name" &&
      subject !== "Registration ID" &&
      subject !== "Section" &&
      subject !== "password"
    ) {
      const row = document.createElement("tr");
      const subjectNameCell = document.createElement("td");
      subjectNameCell.textContent = subject;
      row.appendChild(subjectNameCell);

      const marksCell = document.createElement("td");
      marksCell.textContent = student[subject];
      row.appendChild(marksCell);

      detailBody.appendChild(row);
    }
  }

  detailTable.style.display = "block";
  detailTable.classList.add("showResult");
}

function scrollToSection() {
    document.querySelector("#detailsTable").scrollIntoView({ behavior: "smooth" });
  }
  
submitBtn.addEventListener("click", scrollToSection);


/* to download the result
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const tableElement = document.getElementById("detailsTable");
  html2pdf(tableElement);

  if (downloadBtn.href === "#") {
    event.preventDefault();
  }
});
*/

// to download the result
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const tableElement = document.getElementById("detailsTable");

  // Hide the download button
  downloadBtn.style.display = "none";

  html2canvas(tableElement).then(canvas => {
    // Restore the download button's visibility
    downloadBtn.style.display = "";

    const pdf = new jsPDF();
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210; // A4 width (in mm)
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('result_card.pdf');
  });

  // Prevent the default link behavior
  event.preventDefault();
});

