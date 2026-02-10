export const notFound = (req, res) => {
  res.status(404).json({ is_success: false });
};
