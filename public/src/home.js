function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for(let i =0;i<books.length;i++){
    if(!books[i].borrows[0].returned){
      count+=1;
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  const container = {}
  const result = []
  for(let i =0; i<books.length; i++){
    if(container[books[i].genre]){
      container[books[i].genre] += 1;
    }
    else{
      container[books[i].genre] = 1;
    }
  }
  for(const gen in container){
    const temp = {};
    temp["name"] = gen;
    temp["count"] = container[gen];
    result.push(temp);
  }
  return topFiveCount(result);
}

function getMostPopularBooks(books) {
  const result = books.map((book)=> { //map all books to objects with a name and count key. count key is set to borrows length.
    const container = {};
    container["name"] = book.title;
    container["count"] = book.borrows.length;
    return container;} )
  return topFiveCount(result); // return top 5;
 // console.log(sortedResult);
}

function getMostPopularAuthors(books, authors) {
  const container = {}
  for(let i=0;i<books.length;i++){ //iterate through books
    if(container[books[i].authodId]){ //if container already has key made for author id, add borrow length to the count. otherwise create new key and set count to the borrows length.
      container[books[i].authorId] += books[i].borrows.length;
    }
    else{
      container[books[i].authorId] = books[i].borrows.length;
    }
    
  }
 // console.log(container);
  const result = authors.map((author)=>{
    const temp = {}; //create temporary object
    temp["name"] = `${author.name.first} ${author.name.last}`; //create name key and assign authors name
    temp["count"] = container[author.id]; //create count key and assign count for each author
    return temp;
  });
  //console.log(result);
  return topFiveCount(result); //sort the result array by count, and then return first 5 objects in array using slice.
}


function topFiveCount(array){ //helper function that returns the top 5 of an array of objects with a "count" key.
  return array.sort((objectA,objectB)=> objectA.count > objectB.count ? -1 : 1).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  topFiveCount
};
