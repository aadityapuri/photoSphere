import { verify } from "jsonwebtoken";

function authMiddleware(req: any, res: any, next: any) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try{
    verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = decoded; // Attach user info to request
      next();
    });
  }
  catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
export default authMiddleware;