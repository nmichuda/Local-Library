const { findAuthorById } = require("./books");

function findAccountById(accounts, id) {
  const account = accounts.find((user)=>user.id === id); //find first user that matches id
  return account;
  
}

function sortAccountsByLastName(accounts) { //set result to equal accounts sorted by last name to lower case.
  const result = accounts.sort((accountA,accountB)=> accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return result;
}

function getTotalNumberOfBorrows(account, books) { 
  let total = 0; //set total to 0
  const accountID = account.id; //create const for id of input account
  
  for(let i=0;i<books.length;i++){ //increment count every time a book.borrows contains the account id. then returns the total
    for(let j=0; j<books[i].borrows.length;j++){
      if(books[i].borrows[j].id===accountID){
        total+=1;
      }
    }
  }
  return total;
}



function getBooksPossessedByAccount(account, books, authors) {
 // console.log(books.length);
  let result = [];
  for(let i =0; i<books.length;i++){ //loop through all books in the books array.
    //console.log(books[i].authorId);
    for(let j =0; j<books[i].borrows.length;j++){ //loop through all the borrows in each books borrow array
      
      if(books[i].borrows[j].id===account.id && books[i].borrows[j].returned === false){
       // console.log(books[i].authorID);
        let bookToPush = books[i];
        
        bookToPush.borrows = books[i].borrows.filter((book)=>book.id===account.id && !book.returned); //filter bookToPush borrows key only match account id and book not returned
        bookToPush["author"]= findAuthorById(authors,bookToPush.authorId);//author key is equal to findAuthorByID id number.
       // console.log(books[i].authorID);
        result.push(bookToPush); //push bookToPush to array
        
        
        break; //break loop once id and not returned object been found and pushed
        
      }
    }
  }
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
