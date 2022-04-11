import React, { Component } from "react";
import CurrentContainer from './CurrentContainer';
import FutureContainer from './FutureContainer';
import PastContainer from './PastContainer';
import sampleState from './sampleState';
//more imports?


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
      past: [],
      future: [],
      otherCurrent: [],
      otherPast: [],
      otherFuture: []
    }
    //any function binding happens here
  }

  
  componentDidMount() {
  // fetch request for majority of data from reading list
  // fetch('./someEndpoint')
  // .then(res => res.json())
  // .then(data => {
  //   // create output arrays
    // const current = [];
    // const past = [];
    // const future = [];
    // const otherCurrent = [];
    // const otherPast = [];
    // const otherFuture = [];
  //   // iterate through data
  //   data.forEach(obj => {
  //     if(obj.user_id === 1 && obj.status === 'current') {
  //       current.push(obj);
  //     }
  //     else if(obj.user_id === 1 && obj.status === 'past') {
  //       past.push(obj)
  //       }
  //       else if(obj.user_id === 1 && obj.status === 'future') {
  //         future.push(obj);
  //       }
  //       else if(obj.user_id !== 1 && obj.status === 'current') {
  //         otherCurrent.push(obj);
  //       }
  //       else if(obj.user_id !== 1 && obj.status === 'past') {
  //         otherPast.push(obj);
  //       }
  //       else if(obj.user_id !== 1 && obj.status === 'future') {
  //         otherFuture.push(obj);
  //       }
  //     });
  //     // do we need to return this.setState
  //     this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture})
      
  //   });

    const current = [];
    const past = [];
    const future = [];
    const otherCurrent = [];
    const otherPast = [];
    const otherFuture = [];    
    // // iterate through sampleState data
    sampleState.forEach(obj => {
      if(obj.user_id === 1 && obj.status === 'current') {
        current.push(obj);
      }
      else if(obj.user_id === 1 && obj.status === 'past') {
        past.push(obj)
        }
        else if(obj.user_id === 1 && obj.status === 'future') {
          future.push(obj);
        }
        else if(obj.user_id !== 1 && obj.status === 'current') {
          otherCurrent.push(obj);
        }
        else if(obj.user_id !== 1 && obj.status === 'past') {
          otherPast.push(obj);
        }
        else if(obj.user_id !== 1 && obj.status === 'future') {
          otherFuture.push(obj);
        }
      });
    // re-render using sampleState data
    this.setState({ current: current, past: past, future: future, otherCurrent: otherCurrent, otherPast: otherPast, otherFuture: otherFuture});
  };
  
  // code each container and its components and its logic
  
  render () {

    if(this.state.hasError) {
      return <h1>Somthing went wrong with state, hasError</h1>
    };
    
    const { current, past, future, otherCurrent, otherPast, otherFuture } = this.state;
    
    return (
        <div className="mainContainer">
          <div className= "divInMain">

            <h1>BOOKWORM</h1>
            <h3>@user_1</h3>
          </div>
          <CurrentContainer current={current} otherCurrent={otherCurrent}/>
          {/* <PastContainer past={past} otherPast={otherPast} />
          <FutureContainer future= {future} otherFuture={otherFuture}/> */}
        </div>
    )
          
  } 
      
}
    
export default App;

    //reading_list._id
  // user_id
  // username
  // book_id
  // title
  // author
  // genre_id
  // genre
  // status_id
  // status
  // recommend
  // review

  
    /*
    this.state= {
      current : [
        {
          id:
          title: 
          author:
          genre:
        }
      ],
      future: [
        {
          id:
          title:
          author:
          genre:
        }
      ],
      past: [
        {
          id:
          title:
          author:
          genre:
          recommended:
          review:
        }
      ],
      otherCurrent: [
        {
        id:
        title:
        author:
        genre:
        }
      ],
      otherFuture: [
        {
          id:
          title:
          author:
          genre:
        }
      ],
      otherPast: [
        {
          id:
          title:
          author:
          genre:
          recommended:
          review:
        }
      ]
    }
    
    */
    //array of objects with props that are column headers of sql tables
    
      //component did mount: fetch request to populate state
    /*
      // fetch for all specific user info
      //this will arrive in an array of objects, objects correspond to the SQL tables.
      //create an object for each subcomponent, pass this object as a prop
      // const currentComponent = [];
      iterate through data object, add each pertinent property to array
      }
    */