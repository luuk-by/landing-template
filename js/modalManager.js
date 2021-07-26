const ModalManager = {
  openModal: (modal) => {
    modal.style.display = 'flex';
  },
  closeModal: (modal) => {
    modal.style.display = 'none';
  }
}

const appendModalListeners = () => {
  const edit = document.querySelector('#edit-button');
  edit.addEventListener('click', async (e) => {
    const modal = document.querySelector('.modal');
    ModalManager.openModal(modal);
  });
  const shadow = document.querySelector('.modal__shadow');
  shadow.addEventListener('click', async (e) => {
    const modal = document.querySelector('.modal');
    ModalManager.closeModal(modal);
  });
};

$(appendModalListeners);