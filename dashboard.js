class DashboardComponent extends HTMLElement {
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

    // const shadow = this.attachShadow({
    //     mode: "open"
    // });
  }
  // connect component
  connectedCallback() {
    this.render();
  }
  //
  render() {
    this.innerHTML = `
      <div  class="row">
      <div class="col-sm-6">
      Ram
      </div>
      <div class="col-sm-6">
      Ram
      </div>
          <slot name="header">This is default header</slot>
          <h1>Hello ${this.name}</h1>
          <footer-component></footer-component>
          <slot></slot>
      </div>`;
  }
}
customElements.define("dashboard-component", DashboardComponent);
