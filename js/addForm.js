const FORM_IDS = ['form'];

const formListener = async (formId) => {
  const formValues = FormHelpers.getFormValues($(`#${formId}`));
  
  if (!FormHelpers.validatePhone(formValues.phone)) {
    return false;
  }
  const submitButton = document.querySelector(`#${formId} .form__button`);
  FormHelpers.toggleButton(submitButton, true);
  
  try {
    await OrderManager.newOrder(formValues);
  } catch (err) {
    Swal.fire('Ошибка.<br/> Попробуйте еще раз');
    FormHelpers.toggleButton(submitButton, false);
  }
}

const appendListeners = () => {
  FORM_IDS.forEach((id) => {
    const form = document.querySelector(`#${id}`);
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      formListener(id);
    });
    FormHelpers.addPhoneMask($(`#${id} input[name=phone]`))
  });
};

$(appendListeners);
