export default class Card {
  operations(event, container, elements) {
    this.container = container
    this.elements = elements

    if (event != undefined) {
      if (event.target.classList.contains("place-card__like-icon")) { this.like(event) }
      if (event.target.classList.contains("place-card__delete-icon")) { this.remove(event) }
    }
  }

  like() {

    event.target.classList.toggle('place-card__like-icon_liked')

  }

  remove() {


    this.container.removeChild(this.elements)
  }
  create(name, link) {
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('place-card');
    const y = 'background-image: url(' + link + ')'
    const cardimage = document.createElement('div');
    cardimage.classList.add('place-card__image');
    cardimage.setAttribute('style', y)
    const carddescription = document.createElement('div');
    carddescription.classList.add('place-card__description');
    const carddelete = document.createElement('button');
    carddelete.classList.add('place-card__delete-icon');
    const cardname = document.createElement('h3');
    cardname.classList.add('place-card__name');
    cardname.textContent = name;
    const cardlike = document.createElement('button');
    cardlike.classList.add('place-card__like-icon');
    cardimage.appendChild(carddelete);
    carddescription.appendChild(cardname);
    carddescription.appendChild(cardlike);
    trackContainer.appendChild(cardimage);
    trackContainer.appendChild(carddescription);




    return trackContainer

  }

}
