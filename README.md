# React

## Goal:

* Fetch the data in `<App />`.
* From `<App />`, pass the data down to `<BikeList />`.
* From `<BikeList />`, render `<BikeItem />` components.

```
<App />
  <BikeList />
    <BikeItem />
    <BikeItem />
    <BikeItem />
```


#### Get the Bikes Data:

In `App.jsx`, obtain the bikes from the server and store them in a piece of React state called bikes.

![how we got the bikes](./README_images/01_got_bikes.png)
