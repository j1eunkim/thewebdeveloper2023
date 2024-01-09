const SECRET = "BabyHippo"

let guess = prompt("enter the secret code");
while (guess !== SECRET) {
    guess = prompot("enter the accurate code.")
}
console.log("You got the secrets!!")