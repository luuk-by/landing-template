# landing-template

## Инструкция по интеграции

1. Загрузить последнюю версию репозитория
2. Добавить контент с копируемого сайта в `head` и `body`, добавить скрипты, стили, изображения, импортировать их в соответствующих местах, добавить аналитику
3. Изменить цвета в `.scss` файлах в соответствии с цветовой гаммой сайта и скомпилировать (используя расширения в редакторах)
4. Изменить переменные в папке `js/variables`. В файле `product.json` хранятся данные о товаре для отправки в CRM. Файл `thanks_products.json` хранит данные о товарах на странице благодарности.
5. Стилизовать страницу благодарности `core/good.html` с помощью SCSS. Добавить аналитику.
6. Залить на сервер, оставить тестовую заявку, проверить в CRM.

## Фичи

1. Форма с валидацией номера телефона
2. Кнопка обратного звонка с модальным окном
3. Автоматически всплывающая модалка при скролле вверх/при долгом отсутствии скролла
4. Страница благодарности со списком товаров
