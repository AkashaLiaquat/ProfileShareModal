const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

const openModal=()=>{
  console.log('Modal is open');
  modal.classList.add("modalActive");/* modalActive named class will be added to classList of modal*/
  overlay.classList.add("overlayActive");
}

const closeModal=()=>{
  console.log('Modal is open');
  modal.classList.remove("modalActive");/* modalActive named class will be removed from classList of modal*/
  overlay.classList.remove("overlayActive");
}
