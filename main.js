const notifOnBtn = document.querySelector ('.notif-on-btn')
const notifModal = document.querySelector ('.notif-modal')
const notifCloseBtn = document.querySelector ('.notif-close-btn')
const notifOffBtn = document.querySelector ('.notif-off-btn')

notifOnBtn.addEventListener('click', ()=>{
    notifModal.style.display = 'block';
})
notifCloseBtn.addEventListener('click', closeModal)
notifOffBtn.addEventListener('click', closeModal)
function closeModal() {
    notifModal.style.display = 'none'
}