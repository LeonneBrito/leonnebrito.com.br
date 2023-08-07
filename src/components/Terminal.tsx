'use client'
import { useTerminal } from '@/hooks/useTerminal'

import { JetBrains_Mono as JetBrains } from 'next/font/google'

const jetBrains = JetBrains({ subsets: ['latin'] })

export function Terminal() {
  const { history } = useTerminal()

  return (
    <div id="terminal" className="flex flex-col items-start justify-start">
      {history.map((item, index) => (
        <div
          key={index}
          className={`w-full flex gap-1 p-3 flex-col text-sm border-t-2 border-[#72707D]/10 ${
            item.error
              ? 'bg-[#301e1e] border-l-8 border-l-red-400'
              : 'bg-transparent'
          }`}
        >
          <span className={`${jetBrains.className} text-[#8F8CA8] text-xs`}>
            ~ ({item.executionTime}ms)
          </span>
          <span className={`${jetBrains.className} text-[#E0DEF2] text-bold`}>
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
