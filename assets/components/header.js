let header=`
        <img class="logo" onclick="window.location.replace('/')" src="/assets/images/5a2ae8b7db68181c8f184d78.png" alt="logo rent car">
        <nav>
            <ul class="nav_links">
                <li>
                <a href="index.html">HOME</a>
                </li>
                <li>
                <a href="reservation.html">RESERVATION</a>
                </li>
                <li>
                <a href="gallery.html">GALLERY</a>
                </li>
                <div class="contact-responsive">
                <li>
                <a  href="contact.html">CONTACT</a>
                </li>
                </div>
                <i id="times_menu" class="fas fa-times"></i>
            </ul>
        </nav>
        <a class="cta" href="contact.html">
            <button class="nav_button_contact">CONTACT</button>
        </a>
        <div class="menu_icon">
            <i class="fas pointer fa-bars"></i>
        </div>
`


document.querySelector(".header").innerHTML = header;

// script of header
document.querySelector('#times_menu').addEventListener('click', () => {
    document.querySelector('.nav_links').classList.remove('navbar_responsive');
})

document.querySelector('.menu_icon').addEventListener('click', () => {
    document.querySelector('.nav_links').classList.add('navbar_responsive');
})

