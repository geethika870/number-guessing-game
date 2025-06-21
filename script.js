let min, max, randomNumber, attempts = 0;

    document.getElementById("startGame").addEventListener("click", function () {
      min = parseInt(document.getElementById("minInput").value);
      max = parseInt(document.getElementById("maxInput").value);

      if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter valid min and max values.");
        return;
      }
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log("Random Number: " + randomNumber);
      attempts = 0;

      document.getElementById("rules").innerText = `• Enter a number between ${min} and ${max}`;
      document.getElementById("guessInput").min = min;
      document.getElementById("guessInput").max = max;
      document.getElementById("guessInput").value = "";
      document.getElementById("guessSection").style.display = "block";
    });

    document.getElementById("guessButton").addEventListener("click", function () {
      let usernum = parseInt(document.getElementById("guessInput").value);

      if (isNaN(usernum)) {
        alert("Please enter a valid number.");
        return;
      }

      if (usernum < min || usernum > max) {
        alert(`Please enter a number between ${min} and ${max}`);
        return;
      }

      attempts++;

      if (usernum < randomNumber) {
        alert("Your guess is too low.");
      } else if (usernum > randomNumber) {
        alert("Your guess is too high.");
      } else {
        alert(`🎉 Congratulations! You guessed the number in ${attempts} attempts.`);
        document.getElementById("guessSection").style.display = "none";
      }
    });