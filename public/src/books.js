//const { findAccountById } = require("./accounts.js");
function findAccountById(accounts, id) { //could not get the function to import correctly. unsure whats going on. copy pasted function over and works fine.
  const account = accounts.find((user)=>user.id === id);
  return account;
  
 /*for(let i=0;i<accounts.length;i++){
    if(accounts[i].id===id){
      return accounts[i];
    }

  }
  return null;*/
  
}

function findAuthorById(authors, id) { //returns the author that has matching id. 
  for(let i=0;i<authors.length;i++){
    if(authors[i].id === id){
      return authors[i]
    }
  }
  return null;
}

function findBookById(books, id) { //iterates through books. if id matches, returns the book objet.
  for(let i=0;i<books.length;i++){
    if(books[i].id === id){
      return books[i]
    }
  }
  return null;
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = []; //create an array for checked out books
  let notCheckedOut = []; //create an array for not checked out books
  for(let i =0;i<books.length;i++){ //iterate through all the books.
    if(books[i].borrows.some((book)=>book.returned===false)){ //push all books not returned into checked out array
      checkedOut.push(books[i]);
    }
    else{ //push all other books into notchecked out array
      notCheckedOut.push(books[i]);
    }

  }
  let results = [checkedOut,notCheckedOut]; //results array set to checked out books array and not checked out array.
  //console.log(results);
  return results;
}

function getBorrowersForBook(book, accounts) {
  let results = []; //create results array
 // console.log(findAccountById(accounts,book.borrows[1].id));
  
  for(let i =0; i<book.borrows.length && i<10;i++){ //iterate thorugh books array up to 10.
    let foundAccount = findAccountById(accounts,book.borrows[i].id); //identify account by id
    //console.log(foundAccount);
    foundAccount["returned"] = book.borrows[i].returned; //push returned status to returned key
    results.push(foundAccount); //push found account to results
    //console.log(results);
  }
  //console.log(results);
  return results;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
