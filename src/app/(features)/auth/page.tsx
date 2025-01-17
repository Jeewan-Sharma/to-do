import { redirect } from "next/navigation";

export default function AuthPage() {
  // Redirect to /auth/login when the /auth route is visited
  redirect("/auth/login");
  return null;
}
