let footer = `
        <div class="col">
            <p>Welcome to our website where you can
                 find the cheapest car you need to drive today!</p>
            </div>
            <div class="col">
                <h3>Office <div class="underline"><span></span></div></h3>
                <p>Casablanca, 560006, Morocco</p>
                <p class="email-id">carrental@gmail.com</p>
                <h4>0522198767</h4>
            </div>
            <div class="col">
                <h3>Links <div class="underline"><span></span></div>
            </h3>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="contact.html">CONTACT</a></li>
                <li><a href="gallery.html">GALLERY</a></li>
                <li><a href="reservation.html">RESERVATION</a></li>
            </ul>
            </div>
            <div class="col">
                <h3>NewsLetter<div class="underline"><span></span></div></h3>
            <form>
                <i class="far fa-envelope"></i>
                <input type="email" placeholder="Enter your email" required>
                <button type="submit"><i class="fas fa-arrow-right"></i></button>
            </form>
            <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
        <p class="copyright">© 2021-All Rights Reserved</p>

`
document.querySelector(".footer").innerHTML = footer;