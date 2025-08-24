"use client"

import { CustomDialog, CustomDialogContent, CustomDialogHeader, CustomDialogTitle } from "@/components/custom-dialog"
import { CustomButton } from "@/components/custom-button"
import { CustomCard, CustomCardContent } from "@/components/custom-card"
import { Brain, Play, Clock, Target, Palette, Settings } from "lucide-react"

interface GameGuideDialogProps {
  isOpen: boolean
  onStartGame: () => void
  onOpenChange: (open: boolean) => void
}

export default function GameGuideDialog({ isOpen, onStartGame, onOpenChange }: GameGuideDialogProps) {
  return (
    <CustomDialog open={isOpen} onOpenChange={onOpenChange}>
      <CustomDialogContent className="max-w-sm sm:max-w-md w-[95vw] max-h-[90vh] overflow-y-auto">
        <CustomDialogHeader className="pb-4">
          <CustomDialogTitle className="flex items-center gap-2 text-center text-lg sm:text-xl">
             <img src="/logo.png" alt="Bird Brains" />
          </CustomDialogTitle>
        </CustomDialogHeader>

        <div className="space-y-6 px-1">
          {/* How to Play */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">How to Play</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-brainflip-100 rounded-full flex items-center justify-center text-brainflip-600 font-bold text-xs mt-0.5 flex-shrink-0">
                  1
                </div>
                <p className="leading-relaxed text-white">Tap Titles To Find Matching Pairs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-brainflip-100 rounded-full flex items-center justify-center text-brainflip-600 font-bold text-xs mt-0.5 flex-shrink-0">
                  2
                </div>
                <p className="leading-relaxed text-white">Match all pairs to win the game</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-brainflip-100 rounded-full flex items-center justify-center text-brainflip-600 font-bold text-xs mt-0.5 flex-shrink-0">
                  3
                </div>
                <p className="leading-relaxed text-white">Faster Match = Higher Rank</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-brainflip-100 rounded-full flex items-center justify-center text-brainflip-600 font-bold text-xs mt-0.5 flex-shrink-0">
                  4
                </div>
                <p className="leading-relaxed text-white">Higher Rank = $FLOCK REWARDS</p>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <CustomButton
            onClick={onStartGame}
            className="w-full bg-brainflip-500 hover:bg-brainflip-600 text-white py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-base"
          >
            Start Playing!
          </CustomButton>
        </div>
      </CustomDialogContent>
    </CustomDialog>
  )
}
