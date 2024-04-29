import { useState, useEffect } from 'react'
import axios from 'axios'
// Import the BikeList component:
import BikeList from './BikeList.jsx'


function App() {
  // Instantiate a piece of React state that will
  // hold our bikes data:
  const [bikes, setBikes] = useState([])

  // This will run the callback function one time
  // when this component comes into existence:
  useEffect(() => {
    // Any code I write in here is going to execute
    // when useEffect runs.
    // Let's call fetchBikes:
    fetchBikes()
  }, []) // 👈 Ensures the callback function inside
         //    useEffect only runs one time when this
         //    component comes into existence.

  // This function:
  // 1. Gets the bikes data from our server.
  // 2. Assigns the bikes data to our React state
  //    named "bikes."
  const fetchBikes = () => {
    // Use axios to send an HTTP GET request to
    // /api/bikes:
    axios({
      method: 'GET',
      url: '/api/bikes'
    })
      // When our server response arrives, let's
      // store the bikes data in a piece of React
      // state:
      .then((response) => {
        // See what the server sent us:
        console.log(response.data)

        // Assign a new value to the piece of
        // React state we named "bikes" using its
        // setter function:
        setBikes(response.data)
      })
  }

  // A component returns JSX:
  return (
    <div>
      <h1>Bikes!</h1>
      {/*
        Render an instance of a BikeList component, and
        pass the bikes state as a prop: 
      */}
      <BikeList bikes={bikes} />
    </div>
  );
}


export default App
