import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/dashboard">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
