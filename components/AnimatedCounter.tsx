'use client'

import CountUp from "react-countup"

interface AnimatedCounter {
  amount: number
}

export const AnimatedCounter: React.FC<AnimatedCounter> = ({ amount }) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        decimal="."
        prefix="R$"
        end={amount}
      />
    </div>
  )
}