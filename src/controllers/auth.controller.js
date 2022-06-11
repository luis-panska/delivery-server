import User from "../models/user.model";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    return res.status(200).json({
      ok: true,
      message: "Login successful",
      token: "token",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};
