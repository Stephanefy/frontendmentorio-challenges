const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<footer>
<h3 class="heading-m">Modern Art Gallery</h3>
<p class="footer-text">
  The Modern Art Gallery is free to all visitors and open seven days a
  week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
</p>
<ul class="social-links">
  <li><a href="">
    <img src="./assets/icon-facebook.svg" alt="facebook icon">
  </a></li>
  <li><a href="">
    <img src="./assets/icon-twitter.svg" alt="twitter icon">
  </a></li>
  <li><a href="">
    <img src="./assets/icon-instagram.svg" alt="pinterest icon">
  </a></li>
</ul>
</footer>
`;

class FooterElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    let isLocation = window.location.pathname.includes('location.html')

    this.innerHTML = `
    <footer class="${isLocation ? 'location-footer' : 'main-footer'}">
    <h3 class="heading-m">Modern Art Gallery</h3>
    <p class="footer-text">
      The Modern Art Gallery is free to all visitors and open seven days a
      week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
    </p>
    <ul class="social-links">
      <li><a href="">
        <img src="./assets/icon-facebook.svg" alt="facebook icon">
      </a></li>
      <li><a href="">
        <img src="./assets/icon-twitter.svg" alt="twitter icon">
      </a></li>
      <li><a href="">
        <img src="./assets/icon-instagram.svg" alt="pinterest icon">
      </a></li>
    </ul>
    </footer>
    
    `;
  }
}

customElements.define("footer-element", FooterElement);
