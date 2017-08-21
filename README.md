# Notable Points @ Redux

- **Actions** are facts about what happened
- **Reducers** update the state according to the actions
- **Stores** bring together actions and reducers

### Stores:

* Hold the application state in an object form.
* Cannot access the state directly, has to call the **`getState()`** to get the state, unlike React's this.state
* **`dispatch()`** is like **`setState()`**, it allows state to be updated
* **`subscribe(listener)`** after dispatch happens, it will activate any functions defined here, responding to an **onChange** event.

### Reducers:
* Define what the state can be and what its interactions can be, and are used to create a store.
* **`lib/`** exports the store, **`reducer/`** holds the things that define the state and how to change the state.


## Setting Up a Redux Directory:

- **`yarn init`**, make a **`reducer/`**, a **`lib/`** and a **`__test__/ `** directory
- **`yarn add redux jest`** to install redux and jest
