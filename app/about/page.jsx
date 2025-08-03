import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-500">Home</Link>
      <div >About Page</div>
    </div>
  );
}
