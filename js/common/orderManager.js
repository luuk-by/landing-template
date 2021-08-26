const OrderManager = {
  newOrder: async (formValues) => {
    let product;
    try {
      product = await new Promise((resolve, reject) => {
        $.getJSON(`${currentRootPath}/js/variables/product.json`, resolve);
      });
    } catch (err) {
      console.log('product error');
      throw new Error();
    }
    const body = { ...formValues, ...product };

    try {
      await $.post(`${currentRootPath}/php/send.php`, body, (output) => {
        if (output === 'Ошибка.') {
          Swal.fire('Ошибка.<br/> Попробуйте еще раз');
          return;
        }

        FormHelpers.setWithExpiry('userInfo', { ...body, orderId: output }, 5 * 60 * 1000);
        window.location.replace(`${currentRootPath}/core/good.html`);
      }, 'text');
    } catch (err) {
      console.log('send error');
      throw new Error();
    }
  },
  updateOrder: async (formData) => {
    try {
      await $.post(`${currentRootPath}/php/update.php`, formData);
    } catch (err) {
      console.log('update error');
      throw new Error();
    }
  },
  addToOrder: async (formData) => {
    let body;
    try {
      const goods = await new Promise((resolve, reject) => {
        $.getJSON(`${currentRootPath}/js/variables/thanks_products.json`, resolve);
      });
      const item = goods.find(item => item.id === formData.id);
      body = {
        ...formData,
        price: item.price,
        title: item.title
      };
    } catch (err) {
      console.log('json error');
      throw new Error();
    }

    try {
      await $.post(`${currentRootPath}/php/send.php`, body);
    } catch (err) {
      console.log('send error');
      throw new Error();
    }
  }
};