import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <p className="text-red-700">welcone to RegisterPage</p>
      <Link href="login" className="mt-10">
        Go to Login
      </Link>
    </div>
  );
};

export default RegisterPage;
