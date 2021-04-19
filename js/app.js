// function search

function nameSearch(event){
  let searchText = searchBook.value;
  searchText.toLowerCase();
  console.log(searchText)
  let listBook = document.querySelectorAll('li');
  for (let item of listBook){
      let title = item.firstElementChild.textContent.toLowerCase();
      if (title.indexOf(searchText) === -1){
          item.style.display = 'none';
      }else {
          item.style.display = '';
      }
  }
  
};
//function delete

let updateBtn = document.querySelector("#updateBtn");
function deleteBook(event) {
  // 1- Check the event if raised on the button delete
  const spanName = event.target.textContent;
 //  2  if yes, get the parent and remove it from the  bookList
 if (spanName == "Delete") {
  const delSpan = event.target.parentElement;
  delSpan.remove();
  }else if (spanName === "Edit"){
    li = event.target.parentElement;
    hide.style.display = 'block';
    result.style.display = 'none';
    btnCreate.style.display = "none";
    showOrder.style.display = "none";
    closeBtn.style.display = "block";
    updateBtn.style.display = "block";



    getBook.value = li.children[0].textContent;
    getAuthor.value = li.children[2].textContent;
    updateBtn.addEventListener('click', function() {
      result.style.display = "block";
      hide.style.display = "none";
      showOrder.style.display = "block";
      closeBtn.style.display = "none";

      li.children[0].textContent = getBook.value;
      li.children[1].textContent = getPrice.value + "$";
      li.children[2].textContent = getAuthor.value;
      li.children[3].textContent = getDate.value;


    });
  }


};
//function create book
// 2- Get the form inputs  information
let getBook = document.querySelector('#bookId');
let getAuthor = document.querySelector('#author');
let getDate = document.querySelector('#date');
let getPrice = document.querySelector('#price');
let getDatebook = document.querySelector('#dateId');

let dataWarning = document.querySelector('.warning');
// function create
function createBook(event) {
    // Prevent default to avoid to refresh the page
    event.preventDefault()
    
    // let check_date 
    // compare date
  if(getDatebook.value>getDate.value){
    getBook.value = "";
    getAuthor.value = "";
    getDatebook.value = "";
    getPrice.value = "";
    getDatebook.value = "";
    dataWarning.style.display = "block";
    showOrder.style.display = 'none';
    
  }else{
    // set value to empty
    
    
    // Check if task text, color, date are defined :
     if (getBook.value.length === 0 || getAuthor.value.length === 0 || getDate.value.length === 0 || getPrice.value.length === 0 || getDatebook.length === 0){
      alert('Please Complete form');
      showOrder.style.display = 'none';
      closeBtn.style.display = 'block'

     } else{
       dataWarning.style.display = "none";
       updateBtn.style.display = "none";

        // create span for price of book
        // - class =" book-price"
        let spanPrice = document.createElement('span');
        spanPrice.classList.add('book-price');
        spanPrice.textContent = getPrice.value + '$';
        // Create a span for the taks name
        //    - class = "book-name"
        
        let spanBook = document.createElement('span');
        spanBook.classList.add('book-name')
        spanBook.textContent = getBook.value;
        
          // Create a span for the book author
        //    - class = "book-author"
        let spanAuthor = document.createElement('span');
        spanAuthor.classList.add('book-author');
        spanAuthor.textContent = getAuthor.value;
        // create span for the book date
        // -class = 'book-date'
        let monthOfTheYear = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ];
  
      let defaultDate = getDate.value;
      let getYear = defaultDate.substring(0,4);
      let getMonth = defaultDate.substring(5,7);
      let getDay = defaultDate.substring(8,11)
  
      // Change mothe number to alphabet //
      let monthIndex = parseInt(getMonth) -1 ;
      let newDateFormate = monthOfTheYear[monthIndex] + "/ " + getDay + " /" + getYear;

        let spanDate = document.createElement('span');
        spanDate.classList.add('book-date');
        spanDate.textContent = newDateFormate ;
        // span edit
        let spanEdit = document.createElement('span');
        spanEdit.classList.add('book-edit');
        spanEdit.textContent = 'Edit';
        // create span for delete
        let spanDelete = document.createElement('span');
        spanDelete.classList.add('book-delete');
        spanDelete.textContent = 'Delete';
        //Create a p containing the 3 spans
        // TODO
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.appendChild(spanBook);
        li.appendChild(spanPrice);
        li.appendChild(spanAuthor);
        li.appendChild(spanDate) ;
        li.appendChild(spanEdit);
        li.appendChild(spanDelete);
        ul.appendChild(li);
        // the P background color is the selected color - the text is back
        // TODO
        let div = document.querySelector('.bookResult')
        div.appendChild(ul);
      

         // compare date

        
        hide.style.display = 'none';
        result.style.display = 'block';
        showOrder.style.display = 'block';
        closeBtn.style.display = 'none';


        document.querySelector('#bookId').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#date').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#dateId').value = '';
          
        };
      };
 
  };
let showOrder = document.querySelector('#create');
// let closeBtn = document.querySelector("#close");
let result = document.querySelector('.hide-result');

// hide show
function showElement(element, isShow){
  if (isShow){
    element.style.display = 'block';
    updateBtn.style.display = "none";
    btnCreate.style.display = "block";
    getBook.value = "";
    getAuthor.value = "";
    getDatebook.value = "";
    getPrice.value = "";
    getDatebook.value = "";
  }else{
    element.style.display = 'none';
  }
};
// value hide show
let hide = document.querySelector(".hide")
let createBtn = document.querySelector('#create');
let closeBtn = document.querySelector("#close");
let form = document.querySelector('.container');

createBtn.addEventListener('click',e =>{
  showElement(closeBtn, true);
  showElement(form, true);
  showElement(createBtn, false);
  hide.style.display = 'block';
  let results = document.querySelector('.hide-result');
  results.style.display = 'none';

  

})

closeBtn.addEventListener('click', e =>{
  showElement(closeBtn, false);
  showElement(form, false);
  showElement(createBtn, true);
  let results = document.querySelector('.hide-result');
  results.style.display = 'block';
  
});



 
  // MAIN ----------------------------------------------------
  const btnCreate = document.getElementById("createBook");
  btnCreate.addEventListener('click',createBook);

  let bookList = document.querySelector(".bookResult");
  bookList.addEventListener("click", deleteBook);

  let searchBook = document.querySelector('#search');
  searchBook.addEventListener('keyup', nameSearch);



  
