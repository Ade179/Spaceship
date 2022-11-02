const commentModal = document.querySelector('.com-mod');
const commentBtn = document.querySelectorAll('.com-btn');
const exit = document.querySelector('.close');

const exitBtn = document.createElement('div');
exitBtn.classList.add('exit');
exitBtn.innerHTML = `
     <button class="close">&#10006
 </button>
     `;
commentModal.append(exitBtn);

const showModal = () => {
  commentModal.style.display = 'block';
  commentModal.classList.toggle('open');
  exit.style.visibility = 'visible';
};

const closeModal = () => {
  commentModal.style.display = 'none';
  commentModal.classList.remove('open');
  exit.style.visibility = 'hidden';
};

commentBtn.addEventListener('click', showModal);
exit.addEventListener('click', closeModal);

exports.showModal = showModal;
exports.closeModal = closeModal;