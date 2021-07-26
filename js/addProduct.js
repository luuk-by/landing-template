const addGoods = async () => {
  let goods = []
  try {
    goods = await new Promise((resolve, reject) => {
      $.getJSON('./js/goods.json', resolve);
    });
  } catch (err) {
    console.log('json error')
  }

  const cards = document.querySelector('.cards__wrapper')
  return goods.map((item) => {
    const body = `
      <div class="card__image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="card__body">
        <div class="card__title">${item.title}</div>
        <div class="card__text">
          ${item.text}
        </div>
        <div class="card__prices">
          <span class="card__old__price">${item.oldPrice}р</span>
          <span class="card__new__price">${item.price}<i>р</i></span>
        </div>
        <button onclick="addGood('${item.id}')" class="card__buy">Добавить в заказ</button>
      </div>
    `
    const z = document.createElement('div');
    z.className = 'card';
    z.id = `card-${item.id}`;
    z.innerHTML = body;
    cards.appendChild(z)
  })
}

const addGood = async (id) => {
  const { name, phone } = FormHelpers.getWithExpiry('userInfo')
  if (!phone) {
    alert('Проверьте правильность номера телефона')
    return;
  }
  const button = document.querySelector(`#card-${id} .card__buy`);
  try {
    FormHelpers.toggleButton(button, true, 'Добавляется');
    await OrderManager.addToOrder({
      phone,
      name,
      id,
    })
    FormHelpers.toggleButton(button, false, 'Добавлено!');
    button.disabled = true;
  } catch (err) {
    Swal.fire('Ошибка.<br/> Попробуйте еще раз');
    FormHelpers.toggleButton(button, false, 'Добавить');
  }
}

$(addGoods);
