# The React Quiz

This is small Quiz created using the "useReducer" in order to control the application state changes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Challenge #2: Refactoring "React Quiz" to Context API

- Duplicate `src` folder to `src-no-context`
- Review data flow and passed props
- Identify prop drilling problem
- Use the Context API to fix the (very small) prop drilling problem
- Create a new context `QuizContext` with the reducer we created earlier
- Create a custom provider component `QuizProvider` and provide all the state to the app
- Create a custom hook to consume state all over the application
- Delete all unecessary props
- IMPORTANT: Note how you actually neeed state right in App component. This means you need to wrap the whole App into the context (HINT: try in index.js)
