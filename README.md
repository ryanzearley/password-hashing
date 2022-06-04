# password-hashing
A short project dedicated to learning about password hashing, salts, and asynchronous events. Made with Node.js and bcrypt

<img width="548" alt="password hashing example" src="https://user-images.githubusercontent.com/96708796/172027944-13f59ccd-ad8a-4091-98c9-393992b1b13a.png">

## Table of contents
* [Features](#features)
* [What I Learned](#what-i-learned)
* [Technologies](#technologies)
* [Special Thanks](#special-thanks)

## Features
* Easily change the two passwords to be compared and the number of salt rounds
* Displays and compares the two hashes as well as the salt

### Future Features
* Add visual interface through html

## What I Learned
* `await` can be used to handle asynchronous password hashing, which is preferable because password hashing is an intensive task
* `await` only pauses execution (and waits for the `Promise` to resolve) for the next line in the function block
* If code is dependent on the `Promise` resolving (in this case, the hash being calculated), it should be placed in the same block as the `await` statement
* Otherwise, the event loop will continue executing synchronous functions while the `Promise` resolves
	
## Technologies
Project is created with:
* node.js
* bcrypt.js
	
## Special Thanks
* Thank you to heynode.com for providing such a stellar bcrypt tutorial
* [Link to Tutorial](https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/)
