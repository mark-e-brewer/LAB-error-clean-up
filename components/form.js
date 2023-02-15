import renderToDOM from '../utils/renderToDom';
import sortStudent from '../utils/sortStudents';
import filterBtnRow from './filterBtnRow';
import studentAreas from './studentAreas';

const form = () => {
  const domString = `<form id="sorting" class="d-flex flex-column form-floating ">
    <input
    type="text"
    class="form-control mb-1"
    id="student-name"
    placeholder="Enter a name"
    required
  />
  <label for="floatingInputValue">Name to be sorted</label>
<button type="submit" class="btn btn-success">Get Sorted!</button>
</form>`;

  renderToDOM('#form-container', domString);

  // has to be put on the DOM after form is on DOM, not before
  // on form submit, sort student
  document.querySelector('#sorting').addEventListener('submit', sortStudent);
};

// get form on the DOM on button click
document.querySelector('#start-sorting').addEventListener('click', () => {
  // put html elements on the DOM on click
  form(); // form
  filterBtnRow(); // filter buttons
  studentAreas(); // students and voldy's army divs
});

export default form;
