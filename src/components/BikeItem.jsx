function BikeItem({bike}) {
  console.log('In BikeItem, bike prop is:', bike)

  const handleClick = () => {
    alert(bike.year)
  }

  return (
    <li onClick={handleClick}>
      A {bike.color} {bike.manufacturer} {bike.model}
    </li>
  )
}


export default BikeItem
