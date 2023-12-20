# Software Testing

Software testing is an essential process that ensures the quality, functionality, and reliability of software applications. It involves a systematic evaluation of software components, aiming to identify defects, errors, or deviations from expected behavior to deliver a high-quality end product.

Website testing specifically focuses on assessing web applications, ensuring they function accurately across different browsers, devices, and user scenarios. It encompasses various testing types, including functionality, usability, performance, security, and compatibility checks, to guarantee a seamless and satisfying user experience.

For the website, Cat-Lovers, we will be using Cypress for E2E Testing. A brief guide to cypress is mentioned in the following paragraphs.

## Cypress
### What is Cypress?

An open source, front-end testing tool which is useful for unit tests, integration tests, component tests and e2e tests. Since unit tests are the responsibility of the developer, and 
there are multiple uni tests tools available in each language such as Junit for Java, Pytest for Python, we use cypress mainly for E2E Tests.

#### Why is Cypress used in the industry?

Cypress has everything a Software Tester wishes for: An impressive GUI, ease of use, high performance speed and a well known community. Some other benefits include faster setup, faster to test, easier to debug and not language dependent. Cypress can be used for any weba pplication which is being built on javascript or any of the javascript frameworks or libraries. 

#### Setup and important commands

Start by cloning a github repository with yourself on your Visual Studio Code. Visual Studio Code is faster and quick to use than other IDEs. After you have successfully cloned a git repository with yourself run the following command.
```
npm install
```

This command is used for all the node related projects. Running this command successfully installs all the node modules and packages inside the project. After this command, run the following command to run your application on your localhost.
```
npm start
```

Open a separate terminal and run the following command:
```
npm install cypress --save-dev
```

This command will install all the cypress related modules and dependencies in the project. 

After this command, you need to start the cypress tool. This will open the cypress GUI for you. Once the GUI is opened, you will follow the instrucions on your browser and choose the options which best suit you. The command to start cypress is:
```
npx cypress open
```

Great, now we are ready to begin with our E2E Testing. Navigate to your IDE and open the folder cypress which has been installed freshly after running the above commands. In your folder, go to the subfolder e2e and inside this folder, create a new 'cy.js' file to start writing your E2E tests for your website. You can refer to the file which I have created for any issues.

#### Important keywords in Cypress

There are a variety of commands and keywords which are used in cypress. You can have a look at them here: [Cypress Commands](https://docs.cypress.io/api/table-of-contents)

However, I will be mentioning a few basic and most commonly used commands and keywords in cypress for you all to get started.

**Cypress Keywords**

* describe(): define a test suite or a group of tests
* before(): runs once before all the tests in a test file
    1. beforeEach(): runs before each individual test case within a test file
    2. beforeAll(): runs once before all the tests in the entire test suite
* it(): defines an individual test case or a specification
* context(): group and organize test commands within a specific context or scope

**Cypress Commands**

* cy.visit(): Navigate to a specific URL.
* cy.get(): Retrieves DOM elements using selectors like IDs, classes, etc.
* cy.contains(): Looks for DOM elements with specific text content.
* cy.click(): Triggers a click event on a DOM element.
* cy.type(): Types into an input field or any focusable element.
* cy.should(): Adds assertions to ensure an element has specific properties.
* cy.wait(): Pauses the test to wait for a specific condition or duration.
* cy.each(): iterate over a set of elements returned by a command, allowing you to perform actions or assertions on each element individually
* cy.wrap(): wrap an element or value to perform further Cypress commands or assertions
* cy.type(): takes in a typed tex in a text field
* cy.url(): checks for a url which has been passed in the parameter if its correct or not
* cy.first(): used to select the first element from a set of matched elements
* cy.within(): sets the context of subsequent commands to operate within a specific DOM element or a collection of elements
* cy.eq(): used to select a specific element from a set of matched elements based on its index
