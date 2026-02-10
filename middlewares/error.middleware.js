export const errorHandler = (err, req, res, next) => {
  res.status(500).json({ is_success: false });
};
