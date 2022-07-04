const login = (req, res) => {
  if (req.body.nickname === "aga" && req.body.pass === "da") {
    res.status(200).json({ foo: true });
  } else {
    res.status(200).json({ foo: false });
  }
};

export default login;
