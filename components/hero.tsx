
"use client"

import React, { useEffect, useRef, useState } from "react"

type Slide = {
    id: number
    title: string
    subtitle?: string
    image: string
    cta?: { label: string; href: string }
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Explore breathtaking destinations",
        subtitle: "Handpicked tours for unforgettable memories",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f165bf8af1c1ed1d3e8d5b8f8c9f51d",
        cta: { label: "Discover Tours", href: "/" },
    },
    {
        id: 2,
        title: "Luxury stays, local experiences",
        subtitle: "Curated hotels and local guides",
        image:
            "https://images.unsplash.com/photo-1501117716987-c8e9b8d1d1dc?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3901f5c1f9c7c6b5b9a1d8b6cd6a6e73",
        cta: { label: "See Packages", href: "/" },
    },
    {
        id: 3,
        title: "Adventures for every traveler",
        subtitle: "From solo trips to family vacations",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a4f5e5b45f4c6a221a9a3b7b9d6a4d2",
        cta: { label: "Get Started", href: "/" },
    },
]

export default function Hero() {
    const [index, setIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef<number | null>(null)
    const startX = useRef<number | null>(null)

    const goTo = (i: number) => setIndex((i + slides.length) % slides.length)
    const next = () => setIndex((i) => (i + 1) % slides.length)
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

    // Autoplay
    useEffect(() => {
        if (isPaused) return
        intervalRef.current = window.setInterval(() => {
            next()
        }, 5000)
        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current)
        }
    }, [isPaused])

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next()
            if (e.key === "ArrowLeft") prev()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    // Touch handlers for swipe
    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX
    }
    const onTouchMove = (e: React.TouchEvent) => {
        if (startX.current == null) return
        const currentX = e.touches[0].clientX
        const diff = startX.current - currentX
        // do nothing while moving; wait for end to decide
    }
    const onTouchEnd = (e: React.TouchEvent) => {
        if (startX.current == null) return
        const endX = e.changedTouches[0].clientX
        const diff = startX.current - endX
        const threshold = 50
        if (diff > threshold) next()
        else if (diff < -threshold) prev()
        startX.current = null
    }

    return (
        <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
                className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Slides container */}
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0 relative h-64 sm:h-96">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />

                            {/* Content */}
                            <div className="absolute left-6 bottom-6 sm:left-12 sm:bottom-12 max-w-xl text-white">
                                <h2 className="text-xl sm:text-3xl font-semibold drop-shadow-md">{slide.title}</h2>
                                <p className="mt-2 text-sm sm:text-base opacity-90">{slide.subtitle}</p>
                                {slide.cta && (
                                    <a
                                        href={slide.cta.href}
                                        className="inline-block mt-4 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white py-2 px-4 rounded-md text-sm shadow-md"
                                    >
                                        {slide.cta.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prev / Next buttons */}
                <button
                    aria-label="Previous slide"
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    aria-label="Next slide"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${i === index ? "bg-white shadow-md w-8 rounded-full" : "bg-white/60"
                                }`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
