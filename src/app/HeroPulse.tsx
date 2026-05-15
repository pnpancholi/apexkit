import { useEffect, useState } from 'react'

const WORDS = ['developers.', 'hackers.', 'builders.']

const ANIMATION_CLASSES = {
  INITIAL: 'opacity-100 translate-y-0 translate-z-0 rotate-x-0',
  EXIT: 'opacity-0 -translate-y-2 [transform:rotateX(90deg)] blur-sm transition-all duration-500 ease-in',
  RESET: 'opacity-0 translate-y-2 [transform:rotateX(-90deg)] delay-0 duration-0 transition-none',
  ENTER:
    'opacity-100 translate-y-0 [transform:rotateX(0deg)] blur-0 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function HeroPulse() {
  const [index, setIndex] = useState(0)
  const [fadeProp, setFadeProp] = useState(ANIMATION_CLASSES.INITIAL)

  useEffect(() => {
    let mounted = true

    const animateWords = async () => {
      while (mounted) {
        await delay(2500)
        if (!mounted) break

        setFadeProp(ANIMATION_CLASSES.EXIT)
        await delay(500)

        if (!mounted) break
        setIndex((prev) => (prev + 1) % WORDS.length)
        setFadeProp(ANIMATION_CLASSES.RESET)

        await delay(50)
        if (!mounted) break

        setFadeProp(ANIMATION_CLASSES.ENTER)
      }
    }

    animateWords()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="inline-block min-w-[360px] whitespace-nowrap [perspective:1000px] align-middle">
      <span className={`block font-mono text-accent transform-gpu origin-bottom ${fadeProp}`}>
        {WORDS[index]}
      </span>
    </div>
  )
}
