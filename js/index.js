import { Cardcomponent } from "../component/CardComponent.js";

let renderArea = document.querySelector("#renderArea");

const Base_Url = "http://127.0.0.1:5500/data/products.json";

fetch(Base_Url)
  .then((res) => res.json())
  .then((data) => {
    let products = data;
    products.map((product) => (renderArea.innerHTML += Cardcomponent(product)));
    
  });
