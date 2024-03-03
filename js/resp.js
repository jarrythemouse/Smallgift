burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventlistener('click',()=>{
    rightnav.classList.toggle('v-clss-resp');
    navList.classList.toggle('v-clss-resp');
    navbar.classList.toggle('h-nav-resp');

})