import React, { useState, useEffect } from 'react';
import '../styles.scss';
import Button from './Button';

const BookCard = props =>{

  // ---------------STATE FOR BOOK COMPONENT-----------------------------
  const { title, status, userid, bookID, readinglistid, statusId } = props.books;
  let { type } = props;
  const [readStatus, setStatus] = useState(1);

  // console.log(readStatus)

  //------------UPDATE READ STATUS FROM PRESENT TO PAST------------------

  const updateStatus = props => {

    setStatus(readStatus + 1 );
    var element = document.getElementById("currentCard");
    element.remove();
    // console.log(readStatus);

    // if(readStatus === 2) {
    // console.log('about to fetch')
 
    //   // useEffect(()=>{
    //   //   console.log('entered useEffect')
    //     fetch(`/books/${readinglistid}`, {
    //       method: 'PATCH',
    //       body: JSON.stringify({
    //       statusId: 2,
    //       }),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',  
    //       },
    //     })
    //       .then(res => res.json()) 
    //       .then(res => {
    //       console.log(res);
    //       })
    //       .catch(err=>{console.log(err)});
    //   // },[]);
    // }
  }

//-----------------------checks for other user data-----------------------------
if(userid !== 1){

  if(type === 'otherpresent' && status === 'present' || statusId === 1){  

// --------------- BOOK COMPONENT DISPLAYS CURRENT READS... ----------------

  return (
    <main id="bookcard">
      <div className ="bookCard" id="currentCard">        
        <p className = "bookTitle">Title: {title}</p>
        <Button bookID={bookID} props={props}/>
  
      </div>
    </main>
  );
  }
  else if(type === 'otherpast' && status === 'past'){

// ----------------------- BOOK COMPONENT DISPLAYS PAST READS... -------------------

  return (
    <main id="bookcard">
      <div className ="bookCard" id="pastBookCard">
        <p className = "bookTitle">Title: {title}</p>
        <Button bookID={bookID} props={props}/>
      </div>
    </main>
  );
  }
  else if(type === 'otherfuture' && status === 'future'){
        
// --------------------- BOOK COMPONENT DISPLAYS FUTURE READS... ----------------------
    return (
      <main id="bookcard">
        <div className ="bookCard" id="futureBookCard">
          <p className = "bookTitle">Title: {title}</p>
          <Button bookID={bookID} props={props}/>
        </div>
      </main>
    );
  }
}

//-----------------------checks for user1 data-----------------------------
if(userid === 1){

  if(type === 'present' && status === 'present'){  

// --------------- BOOK COMPONENT DISPLAYS CURRENT READS... ----------------

  return (
    <main id="bookcard">
      <div className ="bookCard" id="currentCard">        
        <p className = "bookTitle">Title: {title}</p>
        <Button bookID={bookID} props={props}/>
        <button id="doneBtn" onClick={updateStatus}>DONE READING</button> 
      </div>
    </main>
  );
  }
  else if(type === 'past' && status === 'past'){

// ----------------------- BOOK COMPONENT DISPLAYS PAST READS... -------------------

  return (
    <main id="bookcard">
      <div className ="bookCard" id="pastBookCard">
        <p className = "bookTitle">Title: {title}</p>
        <Button bookID={bookID} props={props}/>
      </div>
    </main>
  );
  }
  else if(type === 'future' && status === 'future'){
        
// --------------------- BOOK COMPONENT DISPLAYS FUTURE READS... ----------------------
    return (
      <main id="bookcard">
        <div className ="bookCard" id="futureBookCard">
          <p className = "bookTitle">Title: {title}</p>
          <Button bookID={bookID} props={props}/>
        </div>
      </main>
    );
  }
}
};

export default BookCard;