import GraphModal from 'graph-modal';

const modal = new GraphModal();

const modalBenefit = document.querySelector('[data-graph-target="modal-benefit"]');

if (modalBenefit) {
  modal.open("modal-benefit");
}