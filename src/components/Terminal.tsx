'use client'
import { useTerminal } from '@/hooks/useTerminal'

import { JetBrains_Mono as JetBrains } from 'next/font/google'

const jetBrains = JetBrains({ subsets: ['latin'] })

export function Terminal() {
  const { history } = useTerminal()

  return (
    <div
      id="terminal"
      className="flex flex-col gap-2 items-start justify-start p-3"
    >
      {history.map((item, index) => (
        <div
          key={index}
          className="w-full flex gap-1 p-2 flex-col text-sm border-t-2 border-[#72707D]/10"
        >
          <span className={`${jetBrains.className} text-[#8F8CA8] text-xs`}>
            ~ ({item.executionTime}ms)
          </span>
          <span className={`${jetBrains.className} text-gray-50 text-bold`}>
            {item.input}
          </span>
          <span className={`${jetBrains.className} text-[#8F8CA8]`}>
            {item.output}
          </span>
        </div>
      ))}
    </div>
  )
}
