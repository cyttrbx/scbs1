import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return <div className="p-4">
    <Link href="/" className="text-blue-500">Home</Link>
    <h1>This is the Login Page</h1>;
  </div>;
}
