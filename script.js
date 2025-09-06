// Change text of paragraph
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("myParagraph").textContent = "The text has been changed!";
});

// Add new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
  const newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  document.getElementById("myList").appendChild(newItem);
});

// Remove an element (removes last list item if exists)
document.getElementById("removeItemBtn").addEventListener("click", function() {
  const list = document.getElementById("myList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  } else {
    alert("No more items to remove!");
  }
});