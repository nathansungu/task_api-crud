const checkId = (req, res, next) => {
  const { Id } = req.params;
  if (!Id) {
    return res.status(400).json({ messege: "Provide Id" });
  }
  next();
};

export default checkId;
