function BikeList({bikes}) {
  console.log("bikes prop is", bikes)
  return (
    <>
      <h2>BikeList</h2>
      {/* Nifty hack to see what the value of a state variable is: */}
      {JSON.stringify(bikes)}
    </>
  )
}


export default BikeList
