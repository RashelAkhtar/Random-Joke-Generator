const any = document.querySelector(".any");
const programming = document.querySelector(".programming");
const misc = document.querySelector(".misc");
const pun = document.querySelector(".pun");
const dark = document.querySelector(".dark");
const christmas = document.querySelector(".christmas");
const joke = document.getElementById("joke");

async function fetchJoke(category = "Any", event) {
  if (event) event.preventDefault();
  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    const data = await response.json();
    if (data.type === "single") {
      joke.textContent = data.joke;
    } else if (data.type === "twopart") {
      joke.textContent = `${data.setup} ... ${data.delivery}`;
    } else {
      joke.textContent = "No joke found.";
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
    joke.textContent = "Failed to fetch joke.";
  }
}

any.addEventListener("click", (e) => fetchJoke("Any", e));
programming.addEventListener("click", (e) => fetchJoke("Programming", e));
misc.addEventListener("click", (e) => fetchJoke("Misc", e));
pun.addEventListener("click", (e) => fetchJoke("Pun", e));
dark.addEventListener("click", (e) => fetchJoke("Dark", e));
christmas.addEventListener("click", (e) => fetchJoke("Christmas", e));
