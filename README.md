# Signavio front-end coding challenge

Welcome to the Signavio front-end coding challenge!
The coding challenge consists of a small React.js application which shall be extended by you.

The next sections describe the three tasks and give some general hints.
At the end you can leave any comments about design decisions, instructions or general feedback.

## Task 1

Your task is to extend the component `src/components/Table` to render a table with a dynamically defined column schema.

The schema and the content for the table are provided in a JSON structure.

Example:

````json
{
    "columns": [
        { "id": "myFirstValue", "title": "Column One" },
        { "id": "mySecondValue", "title": "Column Two" }
    ],
    "rows": [
        { "myFirstValue": "Row One", "mySecondValue": 1 },
        { "myFirstValue": "Row Two", "mySecondValue": 2 }
    ]
}```

The table rendered based on the example structure would look like this:

| Column One | Column Two |
| ---------- | ---------- |
| Row One    | 1          |
| Row Two    | 2          |

The `columns` property is an array which defines the number and order of table columns.
Each column object has two properties:

*   `id` - Defines the name of the row objects property to show as the content of the cell
*   `title` - Defines the column header title

The `rows` property is an array which contains one JSON object per row.
The property keys match the names referenced by the columns `id` values.
The property values shall be shown in the table cells.

For the coding challenge, the file `src/data.json` should be used and its content should be rendered in the table.

## Task 2

As the second task the `Table` component shall be extended to offer sorting capabilities.
It should be possible to sort the table by columns.
Once the user clicks on a column header, the table is sorted by that respective column.

*   First click on a column header sorts the table by this column in ascending order
*   Any additional click on the same column header toggles the sorting order to descending and back to ascending
*   A click on a different column header resets the sorting order to ascending and sorts the table by the newly selected column
*   The table indicates which column is currently selected
*   (Optional) The table indicates the sorting order

## Task 3

The third task is about filtering the `Table` content. When filtering is active, only rows that contain a certain text are displayed. The filter function consists of two elements, the first a text input field that captures the search text, and the second an optional column select that specifies the target column.

Implement a "filtering bar" that contains a text input and a dropdown select

*   Text input:
    *   Initially empty - no filtering
    *   When not empty, display only rows that contain the provided text
    *   On value change re-render the table
*   Dropdown select:
    *   Initially no option selected - filtering over all columns of a row
    *   When a column is selected, performs the filtering only over the selected column's text
    *   On value change re-render the table

## General hints

*   The application was bootstrapped using [Create React App](https://github.com/facebook/create-react-app)
*   Yarn is used for dependency management
*   Run `yarn` to install all dependencies
*   Start the development server with `yarn start`
*   Run tests with `yarn test`
    *   Jest is already available as a test framework
*   Feel free to add new dependencies if they help to solve the problem
*   If anything is unclear don't hesitate to contact us

## Design decisions and feedback

* I have kept all the handler methods in App.js and propogating it to respective components along with the state values. Same thing can be implemented using the 'redux', but for simplicity i kept it like this.
* 'react-bootstrap' is used for styling the table and components, to make the development faster.

_Here you can leave any comments about your design decisions, further instructions and comments as well as feedback._
````
