const getTextFileBtn = document.querySelector("#getTextFile");
const getjsonFileBtn = document.querySelector("#getjsonFile");
let textDisplay = document.querySelector("#textDisplay");
let jsonfileContent = document.querySelector(".getJsonFile");

getTextFileBtn.addEventListener("click", getTextFileBtnFunc);
getjsonFileBtn.addEventListener("click", getjsonFileBtnFunc);

// Get Text Function
async function getTextFileBtnFunc(e) {
  e.preventDefault();

  try {
    const response = await fetch("note.txt", {
      method: "GET",
      headers: {
        "Content-Type": "application/Json",
      },
    });

    if (!response.ok) {
      throw new Error("Network respose was not ok");
    } else {
      const data = await response.text();
      textDisplay.textContent = data;
    }
  } catch (error) {
    console.log(`Error from getTextFileBtnFunc: ${error} `);
  }
}

// Get json file
async function getjsonFileBtnFunc(e) {
  e.preventDefault();

  try {
    const response = await fetch("user.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/Json",
      },
    });

    if (!response.ok) {
      throw new Error("Network respose was not ok");
    } else {
      const data = await response.json();

      //   console.log(data);

      data.users.forEach((item) => {
        jsonfileContent.innerHTML += `
         <tr>
          <th scope="row">Id: ${item.id}</th>
          <td>Full Name: ${item.fullName}</td>
          <td>Phone Number: ${item.phone}</td>
          <td>Password: ${item.password}</td>
        </tr>
        `;
      });
    }
  } catch (error) {
    console.log(`Error from getTextFileBtnFunc: ${error} `);
  }
}
