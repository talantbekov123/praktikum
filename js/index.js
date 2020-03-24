import "../pages/style.css"
import Api from "./api.js"
import Card from "./card.js"
import CardList from "./cardlist.js"

import UserInfo from "./userinfo.js"
import Popup from "./popup.js"
import FormValidator from "./formvalidator.js"

//import "js/formvalidator.js"


(function () {
  console.log(123)
  const container = document.querySelector('.places-list');
  const add_inf = document.forms.new;
  const increase = document.querySelector(".increase-card")
  const add = document.querySelector('.popup__button');
  const increase_photo = document.querySelector(".increase-card__photo")
  increase_photo.setAttribute("src", "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg");
  const increase_close = document.querySelector(".increase-card__close")
  window.addEventListener(`resize`, position);
  function position(event) {
    let width = document.body.scrollWidth; // ширина
    let height = screen.height;
    let width_photo = increase_photo.offsetWidth;
    let height_photo = increase_photo.offsetHeight;
    let top = ((((height - height_photo) / 2) - 100) < 36) ? 36 : (((height - height_photo) / 2) - 100)
    increase_close.setAttribute("style", "right:" + (((width / 2) - (width_photo / 2)) - 30) + "px;" + "top:" + top + "px");


  }
  container.addEventListener('click', function increase(event) {
    if (event.target.classList.contains("place-card__image")) {
      const increase = document.querySelector(".increase-card")
      const address = event.target.getAttribute('style');
      increase_photo.setAttribute("src", address.slice(22, -1));
      increase_photo.addEventListener('load', function load() {
        position()
      });
      increase.classList.toggle('increase-card__open')
    }

  });

  increase.addEventListener('click', function increase1(event) {

    const increase = document.querySelector(".increase-card")
    if (event.target.classList.contains("increase-card__close")) {
      increase.classList.toggle('increase-card__open')
    }
  })
  // Можно лучше: Когда в слушателе вы создаёте реализацию, вынесите её в отдельную функцию. В будущем вы сможете переиспользовать функцию
  // Как пример:
  // function myFuncInfo(event){ /* Здесь ваша реализация */ }
  // element.addEventListener('click', myFuncInfo);


  add_inf.addEventListener('submit', function () {

    add.setAttribute("disabled", "true");;
    add.classList.remove("button__open")
  })
  const addButton = document.getElementById('add');
  const close = document.querySelector('.popup__close');
  const editButton = document.getElementById('edit');
  const editclose = document.getElementById('editclose');
  const api = new Api("cohort8", "2c62802a-db2e-486e-86c3-ba471fdf6640",
    'https://praktikum.tk/', '/users/me', '/cards', '/users/me');
  const card = new Card();
  const cardlist = new CardList()
  const initialCards = api.cardbase()
    .then(res => {

      card.operations(undefined, container, undefined, cardlist)

      cardlist.render(container, res, card)



    })
    .catch(res => { console.log("Ошибка сервера " + res) })

  /*[{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  }, {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  }, {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  }, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  }, {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }, {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  }, {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  }, {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  }, {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
  }];*/

  container.addEventListener('click', function editcard(event) {
    const container = document.querySelector('.places-list');
    let elements = event.target.parentElement;
    elements = elements.parentElement;
    card.operations(event, container, elements)
  });
  add_inf.addEventListener('submit', function (event) {
    event.preventDefault()
    card.operations(undefined, container, undefined)
    const cardlist = new CardList()
    cardlist.render(container, [{ link: add_inf.elements.link.value, name: add_inf.elements.name.value }], card)
    add.classList.add("button__open")
  });
  const frame = document.querySelector('.popup');
  const editpopup = document.getElementById('edit-popup');
  const formedit = document.forms.edit;
  const nameedit = formedit.elements.name;
  const linkedit = formedit.elements.link;
  const button = document.getElementById('button');
  const popup = new Popup();
  addButton.addEventListener('click', function (event) { popup.open(event, frame, editpopup, nameedit, linkedit) });
  close.addEventListener('click', function (event) { popup.close(event, frame, formedit, editpopup) });
  add_inf.addEventListener('submit', function () {
    const add_inf = document.forms.new;
    add_inf.elements.name.value = "";
    add_inf.elements.link.value = "";
    popup.close(close, frame, formedit, editpopup)
  });
  editButton.addEventListener('click', function (event) { popup.open(event, frame, editpopup, nameedit, linkedit) });
  editclose.addEventListener('click', function (event) { popup.close(event, frame, formedit, editpopup) });
  const userinfo = new UserInfo();
  userinfo.setUserInfo(undefined, nameedit, linkedit, undefined, api)

  button.addEventListener('click', function functionedit(event) {
    const authorname = formedit.name.value;
    const hobbies = formedit.link.value;
    userinfo.setUserInfo(event, authorname, hobbies, undefined, api)

  })
button.addEventListener('click', function (event) { popup.close(event, frame, formedit, editpopup) })




  const vormvalidatoredit = new FormValidator(formedit, button)
  const vormvalidatoradd = new FormValidator(add_inf, document.querySelector('.button__open'))


})()


// см. Review2.md

