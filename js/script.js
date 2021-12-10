/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//Selecting the elements for DOM
const body = document.querySelector("body");
const page = document.querySelector(".page");
const header = document.querySelector(".header");
const search = document.querySelector("#search");
const submit = document.querySelector("#submit");

//function `showPage` which will create elements and append them to display nine list items per page

function showPage(dataList, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  // Selecting the list with the class "student-list" and assigning it's content to an empty string
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = " ";

  //Looping through the data array of objects, creating html elements that will then be appended to be displayed in studentList
  for (let i = 0; i < dataList.length; i++) {
    if (i >= startIndex && i < endIndex) {
      // Creating the HTML elements required to format the list items for studentList
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
      // Adding the html elements to studentList
      studentList.insertAdjacentHTML("beforeend", html);
    }
  }
}

// addPagination function: The function uses the dataList parameter, calculates the number of pages required to display the list items(9 per page)

function addPagination(dataList) {
  const numberOfPages = Math.ceil(dataList.length / 9);

  //Selecting the ul element and creating link buttons with pagination
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

//call functions
showPage(data, 1);
addPagination(data);
