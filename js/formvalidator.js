export default class FormValidator {
    constructor(form, button) {
    
            this.setEventListeners(form, button)
    }
    checkInputValidity(element, error) {

        if (element.value.length == 0) {
            // Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов' 
            // выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
            // Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
            // Далее words передаётся в функцию и используется.
            return error.textContent = "Это обязательное поле";
        }
        if (element.validity.tooShort || element.validity.tooLong) {
            return error.textContent = "Должно быть от 2 до 30 символов";
        }
        return error.textContent = '';
    }
    checkingthelink(element, error){

    
    if (element.value.length == 0) {
            return error.textContent = "Это обязательное поле";
        }
        
if(element.value.includes('https://')==false){
error.textContent="Здесь должна быть ссылка"

}
else{
    error.textContent=""
}

    }
    addButtonState(add_inf, add){
        if (add_inf.name.value.length >1 && add_inf.link.value.includes('https://')) {
            add.removeAttribute('disabled');
            add.classList.remove("button__open")
      
          } else {
            add.setAttribute("disabled", "true");;
            add.classList.add("button__open")
          }
    }
    setSubmitButtonState(form, button) {
        // можно лучше: Для валидации используйте кастомный метод validation
        // https: //developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_API%27s_element.setCustomValidity() 
        // на русском https: //msiter.ru/tutorials/javascript/js_validation 
        // на русском https://htmlacademy.ru/blog/useful/html/form-validation-techniques 
        // на английском очень хорошая статья с примерами https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/ 
        // 
        // как пример, если вы установите  <input type="text" min="10" max="100" >
        // то сразу сможете определить что текст слишком короткий, например так: 
        //  
        // if (validity.tooShort) { 
        // // Значение слишком короткое 
        // }
        // if (validity.tooLong) { 
        // // Значение слишком длинное 
        // }
        if ((form.querySelector('.popup__input_type_name').value.length > 1) && (form.querySelector('.popup__input_type_link-url').value.length > 1)) {

            button.disabled = false;
            button.classList.remove("button__close-form");
        } else {
            button.disabled = true;
            button.classList.add("button__close-form");
        }
    }
    setEventListeners(form, button) {

        form.addEventListener('input', ()=> {this.checkInputValidity(form.querySelector('.popup__input_type_name'), form.querySelector('.popup__input-error')) });
        if(document.forms.new==form){
            form.addEventListener('input', ()=> {this.checkingthelink(form.querySelector('.popup__input_type_link-url'), form.querySelector('.error')) });
            form.addEventListener('input', ()=>  { this.addButtonState(form, button) })
        }else{
        form.addEventListener('input', ()=> { this.checkInputValidity(form.querySelector('.popup__input_type_link-url'), form.querySelector('.error')) });}
        form.addEventListener('input', ()=>  { this.setSubmitButtonState(form, button) });
    }


}
