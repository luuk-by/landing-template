const addPopups = () => {
  let lastScroll = 0;
  let lastToTop = 0;
  let timeout;
  let isScrollModalShown = false;
  const triggerModal = () => {
    const modal = document.querySelector('.modal');
    ModalManager.openModal(modal)
  }
  const checkScrollModal = () => {
    const st = $(this).scrollTop();
    if (st > lastScroll) {
      lastToTop = st
    }
    if (lastToTop - st > 1000) {
      triggerModal()
      isScrollModalShown = true;
      lastToTop = 0;
    }
    lastScroll = st;
  }
  const checkTimeoutModal = () => {
    const st = $(this).scrollTop();
    timeout && clearTimeout(timeout);
    if (st !== 0 && st < window.document.body.clientHeight - 1500) {
      timeout = setTimeout(triggerModal, 15000);
    }
  }
  $(window).scroll(function (event) {
    !isScrollModalShown && checkScrollModal()
    checkTimeoutModal()
  });
}

$(addPopups)