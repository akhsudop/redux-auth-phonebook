# Phonebook App

This is a phonebook app built using React and Redux Toolkit. It allows you to
add new contacts, display them below the contact form, and delete contacts from
both the contact list and the external API (mockapi.io) used to store the data.

## Technologies Used

- React
- Redux Toolkit

## Redux Toolkit

Redux Toolkit is a package that simplifies the usage of Redux in React
applications. It provides a set of tools and utilities that help streamline the
process of writing Redux code, reducing boilerplate and making it easier to
manage application state. Some key features of Redux Toolkit include:

- **Redux Toolkit's `configureStore`:** This function combines multiple
  Redux-related setup steps into a single function call, including creating the
  Redux store, applying middleware, and enabling the Redux DevTools Extension.

- **Simplified Redux Slices:** Redux Toolkit encourages the use of "slices" to
  define state and reducers. A slice contains the reducer logic for a specific
  feature or part of the application state, making it easier to manage and
  update state.

- **Immutability and Immer Integration:** Redux Toolkit uses the Immer library
  under the hood, allowing you to write reducers that look like they directly
  mutate state, while automatically generating a new immutable state behind the
  scenes.

- **Async Thunk Actions:** Redux Toolkit includes the `createAsyncThunk`
  function, which simplifies the process of writing asynchronous actions that
  interact with APIs or perform side effects.

- **DevTools Integration:** Redux Toolkit integrates with the Redux DevTools
  Extension, providing a powerful debugging tool for inspecting and manipulating
  the application state.

## Usage

1. Fill in the contact form with the required information.
2. Click the "Add Contact" button to add the contact to the list and store it in
   the external API.
3. The added contacts will be displayed below the contact form.
4. To delete a contact, click the "Delete" button associated with the contact.
   This will remove the contact from the list and delete it from both the
   contact list and the external API.

## External API

This app uses an external API (mockapi.io) to store and retrieve contact data.
The API allows you to perform CRUD operations on the contact data.
