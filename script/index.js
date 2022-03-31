let popupElement = document.querySelector('.popup');
let openedButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');

function openPopup() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

openedButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

const ESC_KEY = 'Escape';
document.addEventListener('keyup', function(event){
  console.log(event.key)
  if (event.key === ESC_KEY) {
    closePopup();
  }
});

let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let nameValue = document.querySelector('.profile__name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let jobValue = document.querySelector('.profile__job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopup();
    // Получите значение полей jobInput и nameInput из свойства value
// document.getElementsByClassName("jobInput").value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
