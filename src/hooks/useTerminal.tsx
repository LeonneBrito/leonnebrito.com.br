'use client'

import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react'

import { getRandomExecutionTime } from '@/utils/getExecutationTime'

interface Command {
  input: string
  output: string
}

interface CommandObject {
  [commandName: string]: Command
}

const commands: CommandObject = {
  whoami: {
    input: 'whoami',
    output: 'leonne',
  },
}

type HistoryItem = {
  input: string
  output: string
  error: boolean
  executionTime?: number
}

type HistoryState = HistoryItem[]

enum ActionType {
  AddToHistory,
  ClearHistory,
}

type Action = {
  type: ActionType
  payload?: HistoryItem
}

function historyReducer(state: HistoryState, action: Action): HistoryState {
  switch (action.type) {
    case ActionType.AddToHistory:
      if (action.payload) {
        return [...state, action.payload]
      }
      return state
    case ActionType.ClearHistory:
      return []
    default:
      return state
  }
}

interface TerminalContextValue {
  history: HistoryState
  dispatch: Dispatch<Action>
  handleUserInput: (input: string) => void
}

const TerminalContext = createContext<TerminalContextValue | undefined>(
  undefined,
)

const TerminalProvider = ({ children }: { children: ReactNode }) => {
  const [history, dispatch] = useReducer(historyReducer, [])

  const handleUserInput = (input: string) => {
    const command = commands[input]
    if (command) {
      dispatch({
        type: ActionType.AddToHistory,
        payload: {
          input: command.input,
          output: command.output,
          error: false,
          executionTime: getRandomExecutionTime().toFixed(
            2,
          ) as unknown as number,
        },
      })
    } else {
      dispatch({
        type: ActionType.AddToHistory,
        payload: {
          input,
          output: 'Command not found.',
          error: true,
          executionTime: 0.0,
        },
      })
    }
  }

  return (
    <TerminalContext.Provider value={{ history, dispatch, handleUserInput }}>
      {children}
    </TerminalContext.Provider>
  )
}

function useTerminal(): TerminalContextValue {
  const context = useContext(TerminalContext)
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider')
  }
  return context
}

export { TerminalProvider, useTerminal }
