document.getElementById("main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Ali is the champion";
document.body.append(newHeader);
