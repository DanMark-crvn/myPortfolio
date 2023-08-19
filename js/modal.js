const openModal = document.getElementById('openModal');
// const openModalAbout = document.getElementById('openModalAbout');
const openModalProjects = document.getElementById('openModalProjects'); 
// const openModalContact = document.getElementById('openModalContact');

const modal_container = document.getElementById('modal_container');
// const modal_containerAbout = document.getElementById('modal_containerAbout');
const modal_containerProjects = document.getElementById('modal_containerProjects');
// const modal_containerContact = document.getElementById('modal_containerContact');

const close = document.getElementById('close');
// const closeAbout = document.getElementById('closeAbout');
const closeProjects = document.getElementById('closeProjects');
// const closeContact = document.getElementById('closeContact');

openModal.addEventListener('click', () =>{
    modal_container.classList.add('show');
});

// openModalAbout.addEventListener('click', () =>{
//     modal_containerAbout.classList.add('show');
// });

openModalProjects.addEventListener('click', () =>{
    modal_containerProjects.classList.add('show');
});
// openModalContact.addEventListener('click', () =>{
//     modal_containerContact.classList.add('show');
// });

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
});

// closeAbout.addEventListener('click', () =>{
//     modal_containerAbout.classList.remove('show');
// });
closeProjects.addEventListener('click', () =>{
    modal_containerProjects.classList.remove('show');
});
// closeContact.addEventListener('click', () =>{
//     modal_containerContact.classList.remove('show');
// });