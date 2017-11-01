var newQuote;
var newAuthor;

var getQuote = function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
      newQuote = data.quoteText;
      newAuthor = data.quoteAuthor;
      if (newQuote.length + newAuthor.length < 138 && newAuthor === "") {
        $("#quote-txt").html(newQuote);
        $("#quote-author").html("- Unknown");
        newAuthor = "Unknown";
      } else if (newQuote.length + newAuthor.length < 138) {
        $("#quote-txt").html(newQuote);
        $("#quote-author").html("- " + newAuthor);
      } else {
        getQuote();
      }
    }
  );
};

getQuote();

$("#btn-new-quote").on("click", function() {
  getQuote();
});

$("#btn-tweet").on("click", function() {
  window.open("https://twitter.com/intent/tweet?text=" + newQuote + "- " + newAuthor, "_blank");
});