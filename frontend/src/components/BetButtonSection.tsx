import BetButton from "./ui/BetButton"
import BetAmountSetSection from "./BetAmountSetSection"
import { useState } from "react"

const BetButtonSection = () => {
  const [selectedBetAmount, setSelectedBetAmount] = useState<number>(5)

  const betFunction = (betType: 'up' | 'down') => {
    console.log(betType, selectedBetAmount)
  }

  return (
    <>
      <BetAmountSetSection setSelectedBetAmount={setSelectedBetAmount} />
      <div className="flex gap-2">
        <BetButton betType="up" betFunction={betFunction} />
        <BetButton betType="down" betFunction={betFunction} />
      </div>
    </>
  )
}

export default BetButtonSection
