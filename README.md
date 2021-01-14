# React Exercise App

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Screenreco](screenshots/react-airbnb.gif)

## Notes
Updating an array or a nested object as a part of a component state: it's better to avoid mutating the object. [This](https://stackoverflow.com/a/51018315/9488227) seems like a good approach:
```javascript
this.setState(prevState => {
    const newItems = [...prevState.items];
    newItems[index].name = newName;
    return {items: newItems};
})
```
Another option -- [immutability-helper](https://github.com/kolodny/immutability-helper) recommended by React.
