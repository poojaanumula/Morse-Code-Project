# Unit Testing

1. What is unit testing?
   Testing what the return is of a small piece of our code, usually a function. Testing a function in isolation

2. Why do we test our code?

-   to check it works how it should
-   in the development phase
-   to pick up any bugs before the product is released to users
-   to make sure our code/feature did not break any of the existing code
-   tests allow us to refactor our code safely
-   collaboration
-   documentation - good tests serve as documentation

3. TDD
   Test-Driven Development
   We write the tests first, then we write the code
   You start with a failing test
   You write just enough code to make the tests pass
   You can refactor the code safely, because you have a test that tells you if you break something
   You have to gather all the requirements before jumping into code writing, you are less bias when writing code
   When you write code first, you might write tests only for the code that you have and forget some edge cases
   Improves collaboration
   Documentation
   Downside - might take a bit more time

4. We will be using a testing framework called Jest

### How to set up Jest?

1. Install it in our project as a dev dependency

```bash
npm install --save-dev jest
```

If this doesn't work, try `npm init` and then install again

This should add node_modules that you don't want to push to github

2. Create a `.gitignore` file and put `node_modules` there. If you pull a project from github that needs external libraries, for example Jest, you just need to run `npm install` and this will create node_modules for you.

3. Add the following to your package.json

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

4. Tests run in Node environment, which means they use syntax like this:

```js
module.exports = sum;
const sum = require("./sum");
```

We want to run our code in the browser, which means we need syntax like this:

```js
export default sum;
import sum from "./sum.js";
```

5. Set up babel

Run

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Create a `babel.config.js` and paste the following code

```js
module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

6. Add a dummy test
   Create a file with the extension of `.test.js` for example `example.test.js`

Add the dummy tests to that file

```js
test("dummy test", () => {
    expect(true).toBe(false);
});
```
 
Confirm that everything is set up correct by running `npm run test`
