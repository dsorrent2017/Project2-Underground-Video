$(document).ready(function () {

  // webstoreContainer holds all of our posts

  // Click events for the edit and delete buttons
  var films;

  function appendFilm(filmName) {

    // This function constructs a post's HTML
    let tableEl = $(".filmTable");
    let row = $("<tr>");
    let nameEl = $("<td>" + filmName.title + "</td>");
    let descriptionEl = $("<td>" + filmName.description + "</td>");
    let rowEnd = $("</tr>");
    tableEl.append(row, nameEl, descriptionEl, rowEnd);
  }

  function getAllFilms() {
    console.log("Films being called");
    $.get("/api/films/", function (data) {
      console.log("getfilms", data);
      films = data;
      // eslint-disable-next-line no-empty
      if (!data || !data.length) {
      } else {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          appendFilm(element);
        }
      }
    });
  }

  getAllFilms();

});