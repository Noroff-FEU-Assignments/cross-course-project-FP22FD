//Object CA

let status = document.getElementById("txts");
const washingMachine = {
  brand: "Siemens",
  height: 85,
  width: 59.6,
  depth: 63.6,
  weight: 89,
  isRunning: false,
  programs: [
    {
      name: "wool",
      temperature: 40,
    },
    {
      name: "cotton",
      temperature: 60,
    },
    {
      name: "syntetic",
      temperature: 30,
    },
  ],

  //when it is off you click on the function, it turns ON and when it is on it turns OFF.

  toggleOnOff: function () {
    if (this.isRunning) {
      console.log("turn off");
    } else {
      console.log("turn on");
    }
    washingMachine.isRunning = !washingMachine.isRunning;
  },
};

function Refresh() {
  document.getElementById("brand").innerText = washingMachine.brand;

  document.getElementById(
    "desc"
  ).innerText = `height: ${washingMachine.height}, width: ${washingMachine.width}, depth: ${washingMachine.depth}, weight: ${washingMachine.weight}`;

  document.getElementById("prog").innerHTML = "";
  for (let prog = 0; prog < washingMachine.programs.length; prog++) {
    document.getElementById("prog").innerHTML +=
      washingMachine.programs[prog].name + ", ";
  }

  document.getElementById("isRunning").innerText = washingMachine.isRunning;
  let btnToggle = document.getElementById("btnToggle");

  if (washingMachine.isRunning === true) {
    btnToggle.value = "OFF";
  } else {
    btnToggle.value = "ON";
  }
}
