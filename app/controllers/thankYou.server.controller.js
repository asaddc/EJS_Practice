exports.renderThankYouView = (req, res) => {
  // if the user didn't submit the second page form, then redirect back to comment.
  // remember if the user isn't logged in and tries to view the comment view, it will redirect to login
  req.body.email ? res.render("thankYou", req.body) : res.redirect("/comment");
};
