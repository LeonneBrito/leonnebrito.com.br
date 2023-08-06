'use client'

import { Fira_Code as FiraCode } from 'next/font/google'

import { GitBranch, Hexagon } from 'lucide-react'

const firaCode = FiraCode({ subsets: ['latin'] })

export function Footer() {
  return (
    <div
      className={`text-sm p-3 text-[#8F8CA8] flex flex-col gap-2 items-start justify-start bg-[#2a273f] border-t-2 border-[#72707D]/20 ${firaCode.className}`}
    >
      <span className="flex gap-2 items-center">
        <b className="text-blue-300 font-bold">leonnebrito.com.br</b> on{' '}
        <b className="flex gap-1 align-baseline text-purple-400 font-bold">
          <GitBranch size={14} /> master
        </b>{' '}
        via{' '}
        <b className="flex gap-1 align-baseline text-green-400 font-bold">
          <Hexagon size={14} /> 16.20.1
        </b>{' '}
        via <b className="text-red-400 font-bold">💎 2.6.10</b>
      </span>
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none font-mono"
      />
    </div>
  )
}
