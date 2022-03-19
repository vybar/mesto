let popupElement = document.querySelector('.popup');
let openedButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

openedButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


// Далее нужно отпарвить содержание

// Находим форму в DOM
let formElement = popupElement.querySelector('.popup__save-button');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = popupElement.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = popupElement.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
// document.getElementsByClassName("jobInput").value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
