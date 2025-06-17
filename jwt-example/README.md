# JSON Web Tokens Example

## What are JSON Web Tokens?
[JSON Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token) is an Internet standard, allowing us to create data encrypted in a JSON format.
<br>
For the purpose of this example, we use a JSON Web Token to securely store a user's information and save it in a cookie to save a user's session.
<br>
If you want to learn how to code the whole website yourself, check out the video tutorial [here](https://www.youtube.com/watch?v=IUbNmsk9diY&t=1399s&ab_channel=Tenacity).
<br>
You may look through the code and run it yourself to see it in action.

## Running the example
The website requires a `.env` file for unique environment variables specific to this example.
<br>
To run the code, add a .env file to this folder with the following contents:
```
JWT_SECRET=MY_TOKEN_SECRET
NODE_ENV=development
```
The `JWT_SECRET` variable defines a secret that JWT uses to sign the token, encrypting it.

