//const { findAccountById } = require("./accounts.js");
function findAccountById(accounts, id) {
  for(let i=0;i<accounts.length;i++){
    if(accounts[i].id===id){
      return accounts[i];
    }

  }
  return null;
  
}

function findAuthorById(authors, id) {
  for(let i=0;i<authors.length;i++){
    if(authors[i].id === id){
      return authors[i]
    }
  }
  return null;
}

function findBookById(books, id) {
  for(let i=0;i<books.length;i++){
    if(books[i].id === id){
      return books[i]
    }
  }
  return null;
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let notCheckedOut = [];
  for(let i =0;i<books.length;i++){
    if(books[i].borrows.some((book)=>book.returned===false)){
      checkedOut.push(books[i]);
    }
    else{
      notCheckedOut.push(books[i]);
    }

  }
  let results = [checkedOut,notCheckedOut];
  //console.log(results);
  return results;
}

function getBorrowersForBook(book, accounts) {
  let results = [];
 // console.log(findAccountById(accounts,book.borrows[1].id));
  
  for(let i =0; i<book.borrows.length && i<10;i++){
    let foundAccount = findAccountById(accounts,book.borrows[i].id);
    //console.log(foundAccount);
    foundAccount["returned"] = book.borrows[i].returned;
    results.push(foundAccount);
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
