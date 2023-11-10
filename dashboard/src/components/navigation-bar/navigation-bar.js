import './navigation-bar.scss';

class NavigationBar {
  render(navigationItems) {
    const liItems = navigationItems.map(navigationItem => {
      return `
        <li>
          <a href="${navigationItem.url}">${navigationItem.title}</a>
        </li>
      `;
    });
    const ul = document.createElement('ul');
    ul.innerHTML = liItems.join('');
    ul.classList.add('navigation-bar');
    document.querySelector('body').appendChild(ul)
  }
}

export default NavigationBar;

// map - creates a new array populated with the results of calling a provided function on every element in the calling array.
// map - Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// join - creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// join - Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// innerHTML - gets or sets the HTML or XML markup contained within the element.
// innerHTML - Read more: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML