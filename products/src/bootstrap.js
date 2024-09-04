import faker from "faker";

// We are going to use webpack to transform this file into something consumable

// arbitary name
const mount = (element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
  //   ReactDOM.render(<App/>, element)
};

// For individual component development
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if(el){
    mount(el)
  }
}


// For deploying component to container application 
export {mount}