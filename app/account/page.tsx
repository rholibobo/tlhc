"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function AccountPage() {
  useEffect(() => {
    // Redirect to profile page
    redirect("/profile")
  }, [])

  return null
}
