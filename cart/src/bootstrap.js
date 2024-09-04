import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;
  el.innerHTML = cartText;
};

// For individual component development
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

// For deploying component to container application
export { mount };
