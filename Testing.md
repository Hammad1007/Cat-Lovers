# Testing

Like any javascript web application, we will be testing it using Cypress Tool for E2E Testing. A complete guide on how to use cypress is mentioned in this file.

## Cypress
### What is Cypress?

An open source, front-end testing tool which is useful for unit tests, integration tests, component tests and e2e tests. Since unit tests are the responsibility of the developer, and 
there are multiple uni tests tools available in each language such as Junit for Java, Pytest for Python, we use cypress mainly for E2E Tests.

#### Why is Cypress used in the industry?

Cypress has everything a Software Tester wishes for: An impressive GUI, ease of use, high performance speed and a well known community. Some other benefits include faster setup, faster to test, easier to debug and not language dependent. Cypress can be used for any weba pplication which is being built on javascript or any of the javascript frameworks or libraries. 

#### Setup and important commands

Start by cloning a github repository with yourself on your Visual Studio Code. Visual Studio Code is faster and quick to use than other IDEs. After you have successfully cloned a git repository with yourself run the following command.
```npm install```

This command is used for all the node related projects. Running this command successfully installs all the node modules and packages inside the project. After this command, run the following command to run your application on your localhost.
```npm start```

Open a separate terminal and run the following command:
```npm install cypress --save-dev```