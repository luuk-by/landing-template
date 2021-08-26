const FORM_IDS = ['form'];

const updateInputs = (formValues = {}) => {
  const localValues = FormHelpers.getWithExpiry('userInfo');
  const values = { ...localValues, ...formValues };
  if (!values.phone) {
    // window.location.replace(currentRootPath)
    return;
  }

  $('input[name=phone]').each(function() {
    this.value = values.phone
      .match(/\d/g).join('').replace('375', '');
  });
  $('input[name=name]').each(function() {
    this.value = values.name;
  });
  $('input[name=key]').each(function() {
    this.value = values.orderId;
  });
}

const formListener = async (formId) => {
  const formValues = FormHelpers.getFormValues($(`#${formId}`));
  
  if (!FormHelpers.validatePhone(formValues.phone)) {
    return false;
  }
  const submitButton = document.querySelector(`#${formId} .form__button`);
  FormHelpers.toggleButton(submitButton, true, 'Обновление');
  
  try {
    await OrderManager.updateOrder(formValues);
  } catch (err) {
    Swal.fire('Ошибка.<br/> Попробуйте еще раз');
    FormHelpers.toggleButton(submitButton, false, 'Обновить данные');
    return;
  }
  ModalManager.closeModal(document.querySelector('.modal'));
  updateInputs(formValues);
  FormHelpers.setWithExpiry('userInfo', formValues, 5 * 60 * 1000)

  const editButton = document.getElementById('edit-button');
  editButton.style.display = 'none';
}

const appendListeners = () => {
  const edit = document.querySelector('#edit-button');
  edit.addEventListener('click', async (e) => {
    const modal = document.querySelector('.modal');
    ModalManager.openModal(modal);
  });
  FORM_IDS.forEach((id) => {
    const form = document.querySelector(`#${id}`);
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      formListener(id);
    });
    FormHelpers.addPhoneMask($(`#${id} input[name=phone]`))
  });
  updateInputs();
};

$(appendListeners);
