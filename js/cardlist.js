export default class CardList {

  addCard(trackContainer) {

    if (trackContainer != undefined)
      this.container.appendChild(trackContainer);


  }

  render(container, allcards, card) {
    this.container = container
    if (allcards != undefined && card != undefined)
      allcards.forEach(({ name, link }) => { this.addCard(card.create(name, link)) })



  }
}
