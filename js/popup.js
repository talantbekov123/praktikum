export default class Popup {

  open(event, frame, editpopup, nameedit, linkedit) {

    if (event.target.classList.contains("user-info__button")) {
  
      this.form(frame)
    }
    if (event.target.classList.contains("user-info__button-edit")) {
      this.editform(editpopup, nameedit, linkedit)
    }

  }
  close(event, frame, formedit, editpopup) {
    if (event.target == undefined)
      return this.form(frame)

    if (event.target.classList.contains("popup__close-edit")) {
      return this.closeform(formedit, editpopup)
    }
    if (event.target.classList.contains("popup__close")) {
      this.form(frame)
    }
    if (event.target.classList.contains("edit-button")) {
      this.closeform(formedit, editpopup)
    }





  }
  form(frame) {
  

    frame.classList.toggle('popup_is-opened')
  }
  editform(editpopup, nameedit, linkedit) {


    editpopup.classList.toggle('popup_is-opened')


    nameedit.value = document.querySelector('.user-info__name').textContent;
    linkedit.value = document.querySelector('.user-info__job').textContent;

  }
  closeform(formedit, editpopup) {


    editpopup.classList.toggle('popup_is-opened')
    formedit.elements.name.value = "13"
    formedit.elements.link.value = "121"
  }

}


