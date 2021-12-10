# Data-Pagination-And-Filtering

Treehouse Techdegree Project 2

The live view of the project can be accessed at https://tshenoy19.github.io/Data-Pagination-And-Filtering/

This goal of this project is to paginate a set of data objects from an array. The array used in the project contains 42 objects. The desired outcome is to display 9 items per page.

The function `showPage` calculates the start index and end index for a page that will display 9 items. The function uses a HTML template literal to create and format elements that will be displayed as list items on an unordered list.

The function `addPagination` creates a link of buttons for the number of pages that will be dynamically created based on the size of the array.

While the `showPage` function will display the list items (9 per page), the `addPagination` function creates the numbered link buttons that lead to their corresponding pages.

Credits:
https://teamtreehouse.com/
https://developer.mozilla.org/en-US/docs/Web/API/Event/target
https://developer.mozilla.org/en-US/docs/Web/API/EventListener
