
document.getElementsByName("inputBox")[0].addEventListener('change', processInput);

function processInput()
{
   console.log("The user said:" + this.value);
   checkInput(this.value); 
}

function updateOutput(output, spicy)
{
   document.getElementById('outputText').innerText = output;
}

function checkInput(userInput)
{
   let newDestination = data.find((object) => object.key == userInput)

   if (newDestination !== undefined)
   {
      updateOutput(newDestination.text);
   }

   else
   {
      updateOutput("I didn't get that");
   }
}

let data = 
[
   {
      key: "North",
      text: "You arrive at large campfire",
      option: ["Go North", "Go West", "Go South", "Go East"]
   },
   {
      key: "South",
      text: "You swim in ocean"
   },
   {
      key: "East",
      text: "You have fallen off a cliff"
   },
   {
      key: "West",
      text: "You cannot go West"
   }
]


