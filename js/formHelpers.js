const FormHelpers = {
  getFormValues: (form) => {
    return form
      .serializeArray()
      .reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
      }, {});
  },
  validatePhone: (phoneValue) => {
    try {
      if (!phoneValue) {
        Swal.fire('Неправильный номер', 'Введите номер в формате<br/> +375(__)___-__-__')
        return false;
      }
      const phone = phoneValue.match(/\d/g).join('');
      if (phone.length !== 12) {
        Swal.fire('Неправильный номер', 'Введите номер в формате<br/> +375(__)___-__-__')
        return false;
      }
      return true;
    } catch (err) {
      console.log('validation error');
    }
  },
  setWithExpiry: (key, value, ttl) => {
    try {
      const now = new Date();

      const item = {
        value: value,
        expiry: now.getTime() + ttl,
      };

      localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
      console.log('local storage error');
    }
  },
  getWithExpiry: (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
  },
  toggleButton: (btn, disabled, btnText) => {
    try {
      if (disabled) {
        btn.style.opacity = '0.7';
        btn.textContent = btnText || 'Отправка заявки';
        btn.disabled = true;
        return
      }
      btn.style.opacity = '1';
      btn.textContent = btnText || 'Отправить заявку';
      btn.disabled = false;
    } catch (err) {
      console.log('btn error')
    }
  },
  addPhoneMask: (input) => {
    try {
      input.inputmask({
        mask: '+375(99)999-99-99',
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
          const phoneValue = pastedValue.match(/\d/g).join('');
          return phoneValue
            .replace('80', '')
            .replace('375', '')
            .replace('+375', '');
        },
      });
    } catch (err) {
      console.log('mask error');
    }
  }
};
