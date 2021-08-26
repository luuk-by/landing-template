const REVIEW_BUTTON_ID = 'rev-btn';

$(() => {
  const review_button = document.getElementById(REVIEW_BUTTON_ID);
  if (!review_button) return;

  const openReviewPopup = () => {
    Swal.fire({
      title: 'Оставьте отзыв',
      html:
        '<div> <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
        '<input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
      confirmButtonText: 'Отправить отзыв',
    }).then(() => {
      Swal.fire('Спасибо!', 'Ваш отзыв был отправлен.', 'success');
    });
  }

  review_button.addEventListener('click', function () {
    openReviewPopup();
  });
});
