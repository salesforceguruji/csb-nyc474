class Footer extends HTMLElement {
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }
  // component attributes
  static get observedAttributes() {
    return ["name"];
  }
  constructor() {
    super();
    this.name = "World";
    const shadow = this.attachShadow({
      mode: "open"
    });
  }
  // connect component
  connectedCallback() {
    this.render();
  }
  //
  render() {
    this.shadowRoot.innerHTML = `
      <div>
          This is a basic Footer
      </div>`;
  }
}
customElements.define("footer-component", Footer);
