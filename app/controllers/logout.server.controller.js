exports.logout = (req, res) => {
  // if the user didn't login, then redirect back to comment.
  req.session.email = undefined;
  res.redirect("/");
};
