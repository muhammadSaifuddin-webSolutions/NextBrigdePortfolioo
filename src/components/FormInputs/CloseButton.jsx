import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
// import { useRouter } from "next/navigation";

export default function CloseButton({
  href,
  parent = "inventory",
}) {
  const router = useNavigate()
  function goBack() {
    router.back();
  }
  return (
    <Button onClick={goBack} type="button" variant="outline">
      Close
      {/* <Link
        href={
          parent === "" ? `/dashboard${href}` : `/dashboard/${parent}${href}`
        }
      >
        Close
      </Link> */}
    </Button>
  );
}
