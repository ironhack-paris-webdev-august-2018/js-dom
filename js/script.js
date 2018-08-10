console.log("script.js CONNECTED!");

var postCommentBtn = document.querySelector(".post-button");
var commentList = document.querySelector("ol");
var textBox = document.querySelector("input");
var deleteButtons = document.querySelectorAll(".delete");

// add a "click" event handler (when this event happens run this function)
postCommentBtn.onclick = function () {
  console.log("coucou");

  // #1 create the new tag (it's empty and not attached to the page)
  var newLi = document.createElement("li");

  // #2 set contents and styling of the tag
  // (use the input's value to get the user's text)
  newLi.innerHTML = textBox.value + " <button class='delete'>Delete</button>";

  // #3 attach new tag to a parent that's in the document (puts it on the page)
  commentList.appendChild(newLi);

  // activate the click functionality of the new delete button
  var newButton = newLi.querySelector(".delete");
  newButton.onclick = function () {
    // get the parent of the <button> (the <li> tag)
    var parentLi = newButton.parentNode;
    console.log("delete coucou", parentLi);
    // remove the parent from the DOM
    parentLi.remove();
  };

  // clear the form by setting input's value to empty
  textBox.value = "";
};

// loop over the list of delete buttons
deleteButtons.forEach(function (oneBtn) {
  // add a "click" event handler (when this event happens run this function)
  oneBtn.onclick = function () {
    // get the parent of the <button> (the <li> tag)
    var parentLi = oneBtn.parentNode;
    console.log("delete coucou", parentLi);
    // remove the parent from the DOM
    parentLi.remove();
  };
});
