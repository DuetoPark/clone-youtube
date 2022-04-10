class Modal {
  constructor(modal, trigger, closeBtn) {
    this.modal = modal;
    this.trigger = trigger;
    this.closeBtn = closeBtn;
  }

  open() {
    this.modal.classList.add('is-active');
    this.closeBtn.focus();
  }

  close() {
    this.modal.classList.remove('is-active');
    this.trigger.focus();
  }
}

export default Modal;
