$(document).ready(function() {
  // Getting a reference to the input field where user adds a new burger
  var $newItemInput = $("input.new-item");
  // Our new burgers will go inside the burgerContainer
  var $burgerContainer = $(".burger-container");
  // Adding event listeners for deleting, editing, and adding burgers
  $(document).on("click", "button.delete", devourBurger);
  $(document).on("submit", "#burger-form", insertBurger);

  // Our initial burgers array
  var burgers = [];

  // Getting burgers from database when page loads
  getBurgers();

  // This function resets the burgers displayed with new burger from the database
  function initializeRows() {
    $burgerContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(burgers[i]));
    }
    $burgerContainer.prepend(rowsToAdd);
  }

  // This function grabs burgers from the database and updates the view
  function getBurgers() {
    $.get("/api/burgers", function(data) {
      burgers = data;
      initializeRows();
    });
  }

  // This function starts updating a burger in the database if a user hits the "Enter Key"
  // While in edit mode
  function devourBurger(event) {
    var updatedBurger = $(this).data("burger");
    if (event.which === 13) {
      updatedBurger.text = $(this)
        .children("input")
        .val()
        .trim();
      $(this).blur();
      updateBurger(updatedBurger);
    }
  }

  // This function updates a burger in our database
  function updateBurger(burger) {
    $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: burger
    }).then(getBurger);
  }

  // This function constructs a burger-item row
  function createNewRow(burger) {
    var $newInputRow = $(
      [
        "<li class='list-group-item burger-item'>",
        "<span>",
        burger.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("burger", burger);
    if (burger.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

  // This function inserts a new todo into our database and then updates the view
  function insertBurger(event) {
    event.preventDefault();
    var burger = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/burgers", burger, getBurgers);
    $newItemInput.val("");
  }
});
