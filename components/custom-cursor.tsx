"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches
    if (isTouchDevice) return

    setIsVisible(true)

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseEnterLink = () => setCursorVariant("link")
    const mouseLeaveLink = () => setCursorVariant("default")
    const mouseEnterButton = () => setCursorVariant("button")
    const mouseLeaveButton = () => setCursorVariant("default")

    // Add mouse move listener
    window.addEventListener("mousemove", mouseMove)

    const links = document.querySelectorAll("a")
    const buttons = document.querySelectorAll('button, [role="button"]')
    const inputs = document.querySelectorAll("input, textarea, select")

    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", mouseEnterButton)
      button.addEventListener("mouseleave", mouseLeaveButton)
    })

    inputs.forEach((input) => {
      input.addEventListener("mouseenter", () => setCursorVariant("text"))
      input.addEventListener("mouseleave", mouseLeaveButton)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", mouseEnterButton)
        button.removeEventListener("mouseleave", mouseLeaveButton)
      })
      inputs.forEach((input) => {
        input.removeEventListener("mouseenter", () => setCursorVariant("text"))
        input.removeEventListener("mouseleave", mouseLeaveButton)
      })
    }
  }, [])

  if (!isVisible) return null

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: "#3b82f6",
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      backgroundColor: "#10b981",
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: "#f59e0b",
    },
    text: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 12,
      scale: 1,
      backgroundColor: "#8b5cf6",
    },
  }

  const currentVariant = variants[cursorVariant as keyof typeof variants]

  return (
    <>
      <div
        className="custom-cursor w-4 h-4 rounded-full"
        style={{
          transform: `translate(${currentVariant.x}px, ${currentVariant.y}px) scale(${currentVariant.scale})`,
          backgroundColor: currentVariant.backgroundColor,
        }}
      />

      <div
        className="custom-cursor-follower w-8 h-8 border-2 border-blue-400/60 rounded-full"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      />

      <div
        className="custom-cursor-outer w-12 h-12 border border-blue-300/40 rounded-full cursor-pulse"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`,
        }}
      />
    </>
  )
}
