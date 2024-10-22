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

---

#### Get the Bikes Data:

* In `<App />`, obtain the bikes from the server and store them in a piece of React state called bikes.

![how we got the bikes](./README_images/01_got_bikes.png)

---

#### Pass the Bikes Data to `<BikeList />`:

In `<App />`, pass `bikes` as a prop to a `<BikeList />` component.

![how we passed bikes as a prop to BikeList](./README_images/02_passed_bikes_to_BikeList.png)

---

#### In `<BikeList />`, Render `<BikeItem />` Components:

In `<BikeList />`, we need to render instances of `<BikeItem />` components:

* By using `.map` on our `bikes` state prop.
* By passing a single bike object to `<BikeItem />` as a prop.

![how we rendered BikeItem components](./README_images/03_rendered_BikeItem_within_BikeList.png)

---

## Diagram of `<App />`, `<BikeList />`, `<BikeItem />`:

![diagram of the app/list/item pattern](./README_images/04_diagram.jpg)

---
  
## Imperative vs Declarative Summary:

![whiteboard of imperative vs declarative](./README_images/05_imperative_vs_declarative.jpg)

---

## Video Links:

* [Part 1](https://youtu.be/xxZ0CIYuEFY)
* [Part 2](https://youtu.be/GhuJiwi6l4Q)
* 
