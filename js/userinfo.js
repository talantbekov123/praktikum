export default class UserInfo {
  constructor() {
  }
  setUserInfo(event, authorname, hobbies, link, api) {

    if (event != undefined) {
      event.preventDefault();
      api.editprofile(authorname, hobbies)
        .then(res => { this.updateUserInfo(res.name, res.about, res.avatar) })
        .catch(res => { console.log("Ошибка") })



    }
    else {
      api.infouser()
        .then(res => { 
      
          
          this.updateUserInfo(res.name, res.about, res.avatar) })
        .catch(res => { console.log("Ошибка") })

    }

  }
  updateUserInfo(authorname, hobbies, link) {
    const name = document.querySelector('.user-info__name');
    const me = document.querySelector('.user-info__job');
    const photo = document.querySelector('.user-info__photo');
    name.textContent = authorname
    me.textContent = hobbies
    photo.setAttribute("style", "background-image: url(" + link + ")")






  }
}