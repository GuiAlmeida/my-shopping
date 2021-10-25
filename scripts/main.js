"use strict";

import { products } from "./products.js";

function createCard() {
  const app = document.getElementById("app");

  products.forEach(product => {
    const content = `
         <div class="card">
            <button class="card__wish-list"></button>
            <div class="card__image">
               <img
                  src="${product.image}"
                  alt='${product.description}'
                  loading="lazy"
               />
            </div>
            <div class="card__infos">
               <h1 class="card__description">
               ${product.description}
               </h1>
               <div class="card__price">
                  <p class="card__price__list">${product.price.list}</p>
                  <p class="card__price__best">${product.price.best}</p>
                  <p class="card__price__cash">
                  em até <span>${product.price.cash}</span> sem juros
                  </p>
               </div>
            </div>
            <div class="card__button-wrapper">
               <a class="card__button" href="${product.link}">Comprar</a>
            </div>
         </div>
      `;
    app.innerHTML += content;
  });
}

function actionsCard() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(item => {
    const buy = ".card__button";
    const wishList = ".card__wish-list";
    const classActive = "is-active";
    const classRemove = "is-remove";

    item.querySelector(wishList).addEventListener("click", e => {
      const element = e.target.classList;
      return element.contains(classActive) ? element.remove(classActive) : element.add(classActive);
    });

    item.querySelector(buy).addEventListener("click", e => {
      const element = e.target;
      const isActive = element.classList.contains(classActive);
      const isRemove = element.classList.contains(classActive);
      if (isActive) {
        element.classList.remove(classActive);
      }
      if (!isActive) {
        element.textContent = "adicionado";
        element.classList.add(classActive);
      }
      if (isRemove) {
        element.classList.remove(classRemove);
        element.textContent = "comprar";
      }
    });
    item.querySelector(buy).addEventListener("mouseover", e => {
      const element = e.target;
      if (element.classList.contains(classActive)) {
        element.textContent = "remover";
        element.classList.add(classRemove);
      }
    });
    item.querySelector(buy).addEventListener("mouseout", e => {
      const element = e.target;
      if (element.classList.contains(classActive)) {
        element.textContent = "adicionado";
        element.classList.remove(classRemove);
      }
    });
  });
}

createCard();
actionsCard();
