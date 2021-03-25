
const link = document.querySelector(".interest__button");
const form = document.querySelector(".form-search-hotels");
const mapBlock = document.querySelector(".interest__map");
const mapImg = document.querySelector(".interest__map img");
const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838861.0973698624!2d-112.40653521477016!3d34.78578064747626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1612168789712!5m2!1sru!2sru" width="1200" height="594" allowfullscreen="" aria-hidden="false" tabindex="0" aria-label="Коконино-Каунти, штат Аризона, Соединённые Штаты Америки"></iframe>';

// Показывает модальное окно при клике на кнопку "Поиск гостиниц в Седоне"

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  form.classList.toggle("form-search-hotels");
  form.classList.toggle("form-search-hotels--active");

});

// Загружает интерактивную карту при клике на картинку с картой.

mapImg.addEventListener("click", function () {
  mapImg.remove();
  mapBlock.insertAdjacentHTML("beforeend",map);
});

// Манипуляции с клавиатуры

window.addEventListener("keydown", function (evt) {

  // Закрываем модальное окно при помощи Esc
  if(evt.keyCode === 27){

    if(form.classList.contains("form-search-hotels--active")){
      evt.preventDefault();

      form.classList.remove("form-search-hotels--active");
      form.classList.add("form-search-hotels");
    }

  }

});




