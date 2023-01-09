# Coding-Quizz
## Criteria 1: Prompts for Password Criteria

The javascript code written for this challenge uses the object method of `prompt()` and `alert()` in order to interact with the user and give instructions in how to sucessfully indicate the criterias for the password. The function created for the password generation is triggered by the click in the element of the button with the words "Generate Password" in color red.

The main purpouse of this alert is to orient the user and give clear instructions of what he must write in the prompts and have the answer validated immediately instead of having to experiment to know what to type in order for the program to work.

<img width="351" alt="Captura de pantalla 2022-12-16 a la(s) 16 43 30" src="https://user-images.githubusercontent.com/118247139/208200943-156f8c92-b7ab-443c-bc9f-69e5025d6225.png">

> ###### Note: The use of different console.log() over the function are mainly use with the purpouse of following the track of what the user wants and what it doesn´t for its password.

## Criteria 2: Prompt Lenght of Password

The first alert that is presented to the user is the length of the password, in this prompt the minimum and maximum length that the password can have is specified. If the user gives a choice that is less or more than what is allowed, an alert will appear telling the user that the amount entered is too small or too large. The program was also configured to identify if the input is not a number and thus give a 3rd type of alert telling the user to only give numbers.

![lenght](https://user-images.githubusercontent.com/118247139/208201286-c311bb0f-26fe-4d16-a872-ecc0afcc5103.png)

## Criteria 3: Character Types Options

The general purpose of this challenge #3 is to develop a function capable of generating a random password of a length determined by the user, which contains the characters that the user decides, having as an option uppercase letters, lowercase letters, numbers and special characters.

![numerical](https://user-images.githubusercontent.com/118247139/208201487-3ecbcd49-5fc0-4726-8b7f-3d35a7766ca6.png)
> ###### Note: Prompt for Number Characters

![upper](https://user-images.githubusercontent.com/118247139/208201493-b0f92aa1-33f4-4be3-80c8-597b9db92eb2.png)
> ###### Note: Prompt for Upper Case Letters Characters

![lower](https://user-images.githubusercontent.com/118247139/208201489-0f203af0-8736-45bc-8f9e-bea15a8be59a.png)
> ###### Note: Prompt for Lower Case Letters Characters

![special](https://user-images.githubusercontent.com/118247139/208201787-e8083ee1-19ab-4d7e-9074-44f5ff6bb687.png)
> ###### Note: Prompt for Special Characters

## Criteria 4: Criteria Validation

There are different ways to complete this challenge, however the approach I decided to take was to give the user the option to choose between which sets of characters they wanted their password to count from. This is why four different prompts are presented to the user who must answer with a Y or an N to indicate if they want to use these types of characters or not.

The function uses three different scenarios depending on the response given by the user, the first scenario is that the user responds with a Y (either uppercase or lowercase) and therefore wants this type of character to be included in their password. So when doing this, that character array is included in another array that will contain all the arrays of type of characters that the user wanted to have in their password.

If the user responds with the letter N (either uppercase or lowercase) a `console.log()` is used merely to keep track of the variables. Finally, the last scenario consists of the user not responding with any of the two previous options, in this case, an alert is sent to the user as to what to respond to, either with the letter Y or N, and then returned to the prompt as a result of the return the function to run again.

![alertcriteria](https://user-images.githubusercontent.com/118247139/208481537-9342fb7f-cce9-460d-80c3-b3700abcb944.png)

## Criteria 5: Password Generation

Continuing with what was mentioned above, once the user has finished choosing the length of his password, and the types of characters it is going to have, the final function is run, which is a mixture between an iteration loop and a double function. of arrays.

The input given as password length is used to perform the number of integrations by comparing it against the variable i or `var i = 0`. This variable is merely used to run a function the number of times it is compared against (in this case the password length number determined by the user).

```
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L ", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "AND Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l ", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "and Z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "- ", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
```

From this loop, the array generated during the prompts is used, which contains all the character arrays that the user has decided to use. Using the properties of `Math.floor()` and `Math.random` an array of characters is randomly chosen from within the array (array of arrays) that contains all of these.

Example: (considering the user enters Y for uppercase, numeric and special characters)
```
var passwordcontent = [uppercase, numeric, special];
```

Once the character array is randomly chosen, the process is repeated for the selected array to randomly choose a character of this type. Since this character is chosen, it is added to a new array using the variable i as position within the new array `var contentpassword[i] = randomcontent` which will thus form an array with all the characters generated by the loop.

Finally, once the iterations are finished, `.join()` is used to join all the elements inside the array and thus create a string. So once the whole function is run, only a string with the final password is returned.

![master](https://user-images.githubusercontent.com/118247139/208482053-54d5bd00-643d-4b89-be16-14d0bb0b7939.png)
![join](https://user-images.githubusercontent.com/118247139/208776111-e76af581-5af3-499e-9eee-181201326df8.png)

## Add Ups

First of all, it is not necessary to use the `.join()` object however this allows you to have a line of characters without commas or spaces and thus give way to accessing the DOM and displaying the password directly on the website.

```
var prepassword = randompassword.join("");
```
> ###### Note: They did try various ways to add the randomly acquired elements directly to a string line however it was not possible using the known methods, so the presented option seems to be the most efficient. Future use of documentation is needed.

Another addition to the code in the javascript is the use of API´s in order to acess the DOM and display the generated password in the page instead of in a prompt. Using `.querySelector()` it is possible to access the html document through the browser and thus modify the DOM directly. The id where the password will be placed is selected and replaced with the variable that contains the string line with the final password.

```
var passwordText = document.querySelector("#password");

passwordText.value = password;
```

<img width="915" alt="Captura de pantalla 2022-12-19 a la(s) 11 17 24" src="https://user-images.githubusercontent.com/118247139/208482810-d9b515d4-78c1-4786-bb4a-9050726b784b.png">

## Details and Future Changes 

When doing different final tests, it is possible for the user to make a mistake by selecting all the prompts with an N. In this case, a password could not be generated since there are no arrays with content to select from.

To fix this in the future, it is proposed to include another `else if` as part of the last prompt where, in case the other 3 previous prompts have been answered with an N, an alert warns the user that he cannot return to answer with an N since then the password would not have any characters and forces you to return to this last prompt and answer with a Y.

```
function specialchrct(){
      specialAnswer = prompt("Do you want your password to have special characters?")
      if (specialAnswer === "Y" || specialAnswer === "y") {
        passwordcontent.push(special)
        console.log(passwordcontent)
      } else if (specialAnswer === "N" || specialAnswer === "n"){
        if ((uppercaseAnswer === "N" || uppercaseAnswer === "n") && (lowercaseAnswer === "N" || lowercaseAnswer === "n") && (numericAnswer === "N" || numericAnswer === "n")){
          alert("You must answer Y for at least one type of character")
          specialchrct();return;
        } else {
        console.log(passwordcontent)}
      } else {
        alert("Answer with Y or N");
        numerical();return;
      }
    }
```

> Visualize the final page [here](https://drums180.github.io/Coding-Quizz/)
