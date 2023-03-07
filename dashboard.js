class Dashboard extends HTMLElement {
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
  render() {
    this.innerHTML = `<br /> 
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-sm-4">
                <a href="https://jagrutigurukul.org">
                <div class="card">
                  <img src="https://gurudev.jagrutigurukul.org/assets/img/JagrutiGurukulLogo.png" class="card-img-top" alt="Jagruti Gurukul">
                      <div class="card-body">
                        <p class="card-text"></p>
                      </div>
                </div>
                </a>
                </div>
            <div class="col-sm-4">
                <a href="https://jagrutigurukul.org/library">
                <div class="card">
                  <img src="https://gurudev.jagrutigurukul.org/assets/img/library_logo.png" class="card-img-top" alt="Jagruti Library">
                      <div class="card-body">
                        <p class="card-text"></p>
                      </div>
                </div>
                </a>
                </div>
                <div class="col-sm-4">
                    <a href="https://salesforceguruji.com">
                <div class="card">
                	<img src="https://gurudev.jagrutigurukul.org/assets/img/SalesforceGurujiLogo.jpg" 	class="card-img-top" alt="Jagruti Library">
                      <div class="card-body">
                        <p class="card-text"></p>
                      </div>
                </div>
                </a>
                </div>
                </div>
                
                <h3>Learning In Progress</h3>
                <div class="row">
                    
                <div class="col-sm-4">
                    <a href="/classroom">
                     <div class="card">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkiwv_y3_z4Ztws7uj5FBZZCmdBwYJiDT-Dg&usqp=CAU" class="card-img-top" alt="Jagruti Library">
                          <div class="card-body">
                            <h5 class="card-title">Cyber Seqirity</h5>
                          </div>
                    </div>
                    </a>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-3">
                
            </div>
          </div>
    </div>
    <div class="words" contenteditable></div>
</body>
`;
  }
}
customElements.define("c-dashboard", Dashboard);
