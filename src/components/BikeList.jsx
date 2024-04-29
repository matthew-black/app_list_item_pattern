import BikeItem from './BikeItem.jsx'

function BikeList({bikes}) {
  console.log("bikes prop is", bikes)
 
  return (
    <>
      <h2>BikeList</h2>
      {/* Nifty hack to see what the value of a state variable is: */}
      {/* {JSON.stringify(bikes)} */}
      <ul>
      {
        bikes.map((bike) => {
          // Render an instance of a BikeItem component, and
          // pass the current value from the bikes array as
          // a prop named bike: 
          return <BikeItem key={bike.id} bike={bike} />
        })
      }
      </ul>      
    </>
  )
}


export default BikeList
