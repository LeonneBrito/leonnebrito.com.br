'use client'

import { Fira_Code as FiraCode } from 'next/font/google'

import { useTerminal } from '@/hooks/useTerminal'

const firaCode = FiraCode({ subsets: ['latin'] })

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
          <span className={`${firaCode.className} text-[#8F8CA8] text-xs`}>
            ~ ({item.executionTime}ms)
          </span>
          <span className={`${firaCode.className} text-gray-50 text-bold`}>
            {item.input}
          </span>
          <span className={`${firaCode.className} text-[#8F8CA8]`}>
            {item.output}
          </span>
        </div>
      ))}
    </div>
  )
}
