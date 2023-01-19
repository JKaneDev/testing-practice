# testing-practice

The Odin Project Testing Practice With Jest Module

## Project Description

This project contains 5 different functions and one object that perform various operations on strings and numbers. The functions are:

`capitalize:` takes a string and returns it with the first character capitalized.

`reverseString:` takes a string and returns it reversed.

`calculator:` an object that contains functions for basic mathematical operations (add, subtract, divide, and multiply). Each function takes two numbers as arguments and returns the correct calculation.

`caesarCipher:` takes a string and returns it with each character "shifted" according to the Caesar Cipher algorithm. This function takes into account wrapping from z to a, case sensitivity, and punctuation.

`analyzeArray:` takes an array of numbers and returns an object with the following properties: average, min, max, and length.

## How To Run Tests

To clone the repository and run the Jest tests, you will need to have Git and Node.js installed on your computer.

First, open a terminal or command prompt and navigate to the directory where you want to clone the repository.

Use the command git clone followed by the repository URL to clone the repository. For example:

### Copy code

`git clone https://github.com/username/repo-name.git`

Once the repository is cloned, navigate into the project directory using the command cd repo-name

In order to run the tests, you need to have the dependencies installed. To do that, you need to run npm install command in the project directory. This command will install all the dependencies specified in package.json file.

After that, you can run the tests using the command npm run test or npm test. This command will start Jest and run all the tests defined in your project.

The tests should now be executed and you should see the results in the terminal, indicating which tests passed and which failed.
