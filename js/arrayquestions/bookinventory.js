// create a book object and print a custom reading status message using its title, author and isRead boolean property

function showStatus() {
  let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isRead: true,
  };

  let message;

  if (book.isRead) {
    message =
      "You have already read '" + book.title + "' by " + book.author + ".";
  } else {
    message =
      "You still need to read '" + book.title + "' by " + book.author + ".";
  }

  document.getElementById("result").innerText = message;
}
