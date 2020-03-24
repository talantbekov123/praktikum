"use strict"

export default class Api {
  constructor(cohort, authorization, base, receiving, cards, update) {
    this.cohort = cohort
    this.authorization = authorization
    this.base = base
    this.receiving = receiving
    this.cards = cards
    this.update = update

  }

  infouser() {// Загрузка информации о пользователе с сервера
    return fetch(this.base + this.cohort + this.receiving, {
      headers: {
        authorization: this.authorization
      }
    })

      .then((res) => {
        if (!res.ok) {
          //тут генерируем ошибку
          // Можно лучше
          // throw new Error(`Something went wrong: ${res.status}`)

          throw 'Ошибка при выполнении запроса'
        }

        return res.json()
      })

      .then(result => result)
      .catch(res => { console.log("Ошибка") })











  }
  cardbase() {//Загрузка первоначальных карточек с сервера



    return fetch(this.base + this.cohort + this.cards, {
      headers: {
        authorization: this.authorization
      }
    })
      .then(res => {
        if (!res.ok) {
          //тут генерируем ошибку

          throw 'Обшибка при выполнении запроса'
        }
        return res.json()
      })
      .then(result => result)
      .catch(res => { console.log("Ошибка") })








  }
  editprofile(authorname, hobbies) {//Редактирование профиля



    return fetch(this.base + this.cohort + this.update, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: authorname,
        about: hobbies
      })
    })
      .then(res => {
        if (!res.ok) {
          //тут генерируем ошибку

          throw 'Обшибка при выполнении запроса'
        }
        return res.json()
      })
      .then(result => result)
      .catch(res => { console.log("Ошибка") })








  }
}