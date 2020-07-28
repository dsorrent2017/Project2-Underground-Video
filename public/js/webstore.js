$(document).ready(function () {

  // webstoreContainer holds all of our posts
  var webstoreContainer = $(".ws-Container");
  var webstoreNameSelect = $("#ws-name");
  // Click events for the edit and delete buttons
  var webstores;

  function appendData(stores) {

    // This function constructs a post's HTML
    let tableEl = $(".storeTable");
    let row = $("<tr>");
    let nameEl = $("<td>" + stores.store_name + "</td>");
    let rowEnd = $("</tr>");
    tableEl.append(row, nameEl, rowEnd);
  }

  function getAllWebstores() {
    console.log("Webstores ready");
    $.get("/api/webstores/", function (data) {
      console.log("getAllWebstores", data);
      webstores = data;
      // eslint-disable-next-line no-empty
      if (!data || !data.length) {
      } else {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          appendData(element);
        }
      }
    });
  }

  // Getting the initial list of posts
  getAllWebstores();
  //   function getWebstoresByStoreName(name) {
  //     $.get("/api/webstores/" + store_name, function (data) {
  //       console.log("getWebstoreByStoreName", data);
  //       if (!data || !data.length) {
  //         displayEmpty();
  //       } else {
  //         initializeRows();
  //       }
  //     });
  //   }

  // This function grabs posts from the database and updates the view
  function getWebstoreByStoreName(name) {
    var store_name = name || "noNameProvided";
    $.get("/api/webstores/" + store_name, function (data) {
      console.log("getWebstoreByStoreName", data);
      if (!data || !data.length) {
        // eslint-disable-next-line no-use-before-define
        displayEmpty();
      } else {
        // eslint-disable-next-line no-use-before-define
        appendData(data);
      }
    });
  }
  // This function does an API call to delete posts
  function deleteWebstore(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/webstores/" + id
    })
      .then(function () {

        getPosts(postCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed post HTML inside

  // This function figures out which post we want to delete and then calls
  // deletePost
  function handleWsDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }
  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  function handleWstEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/ws-cms?post_id=" + currentPost.id;
  }
  // This function displays a message when there are no posts
  function displayEmpty() {
    webstoreContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
    webstoreContainer.append(messageH2);
  }
  // This function handles reloading new posts when the category changes
  function handleWsChange() {
    var newPostCategory = $(this).val();
    getPosts(newPostCategory);
  }
});