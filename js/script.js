/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//Selecting the elements for DOM
const body = document.querySelector("body");
const page = document.querySelector(".page");

//function `showPage` which will display page of 9 students
function showPage(dataList, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;

  // Selecting the ul element with the class "student-list" and assigning it's HTML content to an empty string
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = " ";

  //Looping through the array of data objects, creating html template literal and inserting the HTML into studentList (ul)
  for (let i = 0; i < dataList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      // Creating the HTML template literal for studentList
      let html = `
            <li class="student-item cf">
               <div class="student-details">
               <img class="avatar" src="${dataList[i].picture.large}" alt="Profile Picture">
               <h3>${dataList[i].name.first} ${dataList[i].name.last}</h3>
               <span class="email">${dataList[i].email}</span>
               </div>
               <div class="joined-details">
               <span class="date">Joined ${dataList[i].registered.date}</span>
               </div>
            </li>`;
      // Adding the html to studentList
      studentList.insertAdjacentHTML("beforeend", html);
    }
  }
}

// addPagination function: The function uses the dataList parameter, calculates the number of pages required to display the list items(9 per page)

function addPagination(dataList) {
  const numberOfPages = Math.ceil(dataList.length / 9);

  //Selecting the ul element and creating link buttons with page numbers
  const linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  for (let i = 1; i <= numberOfPages; i++) {
    let button = document.createElement("button");
    let html = `<li>
         <button type="button"> ${i}</button>
       </li>`;
    //Appending linkList with the newly created buttons
    linkList.insertAdjacentHTML("beforeend", html);
  }
  //Selecting the first button for page 1 and assigning it with the class 'active'
  const firstButton = document.querySelector("button");
  firstButton.className = "active";

  //Adding an event listener to linkList, removing the 'active' class from any button other than the target thus ensuring only the target button has the 'active' class
  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const elementActive = document.querySelector(".active");
      elementActive.className = "";
      e.target.className = "active";
      //Calling the showPage function by passing in the data and the page number to display the correct page
      showPage(data, e.target.textContent);
    }
  });
}

//call the two functions `showPage` and `addPagination`
showPage(data, 1);
addPagination(data);
