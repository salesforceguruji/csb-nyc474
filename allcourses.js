class AllCourses extends HTMLElement {
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
    this.courses = [{ name: "Course 1" }, { name: "Course 2" }];
  }
  // connect component
  connectedCallback() {
    this.render();
  }
  //
  render() {
    var productsHtml = "<div>";
    for (var course of this.courses) {
      productsHtml += "<span>" + course.name + "</span>";
    }
    productsHtml +=
      "<span>" +
      (
        <smart-card class="basic-card">
          <div>
            <imgage
              class="card-img-top"
              src="C:\Users\LENOVO\Desktop\courseslogo.jpg"
              alt="Card image cap"
            ></imgage>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                {""}
                course.name Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <a href="1" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </smart-card>
      ) +
      "</span>";
    productsHtml += "</div>";
    this.innerHTML = productsHtml;
  }
}
customElements.define("c-all-courses", AllCourses);
