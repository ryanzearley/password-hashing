const bcrypt = require("bcryptjs");

const password1 = "password1";
const password2 = "password";
const saltRounds = 12;

async function passwordDemo(password1, password2, saltRounds) {
  let salt;
  let hash1;
  let hash2;

  // get salt
  salt = await bcrypt.genSalt(saltRounds);

  // get hashes
  // hash2 is found for demonstration purposes
  // and is not used in the comparison below
  hash1 = await bcrypt.hash(password1, salt);
  hash2 = await bcrypt.hash(password2, salt);

  // print hashes
  console.log(`Password Simulator`);
  console.log(`Password 1: \t${password1}`);
  console.log(`Password 2: \t${password2}\n`);
  console.log(`Salt:   \t${salt}`);
  console.log(`Hash 1: \t${hash1}`);
  console.log(`Hash 2: \t${hash2}\n`);

  // compare password2 with hash1
  bcrypt.compare(password2, hash1, function (err, result) {
    if (result) {
      // log in
      console.log("Access granted!");
    } else {
      // access denied
      console.log("Access denied!");
    }
  });
}

passwordDemo(password1, password2, saltRounds);

// learned:
// await only blocks next line of THAT function, interpreter continues outside the scope
// event loop
// if it is dependent, make sure it is within the .then() or await block
