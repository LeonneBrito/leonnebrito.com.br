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
  help: {
    input: 'help',
    output: `
      <span class="text-green-400">help</span> - Show this help message.<br />
      <span class="text-green-400">clear</span> - Clear the terminal screen.<br />
      <span class="text-green-400">whoami</span> - Show information about me.<br />
      <span class="text-green-400">skills</span> - Show my skills.<br />
      <span class="text-green-400">carrer</span> - Show my carrer.<br />
      <span class="text-green-400">contact</span> - Show my contact information.<br />
      <span class="text-green-400">exit</span> - Exit the terminal.<br />
    `,
  },
  clear: {
    input: 'clear',
    output: '',
  },
  whoami: {
    input: 'whoami',
    output: `
      <span class="text-green-400">Name:</span> Leonne Brito<br />
      <span class="text-green-400">Age:</span> 24<br />
      <span class="text-green-400">Location:</span> Parauapebas, Pará - Brazil<br />
      <span class="text-green-400">Occupation:</span> Sênior Frontend Developer<br />
      <span class="text-green-400">Company:</span> <a href="https://www.nav9.tech/" target="_blank" class="text-blue-400">nav9</a><br />
      <span class="text-green-400">Email:</span> <a href="mailto:britoleonne@gmail.com" target="_blank" class="text-blue-400"> britoleonne@gmail.com</a><br />
      <span class="text-green-400">Phone:</span> <a href="tel:+5594984028271" target="_blank" class="text-blue-400">+55 (94) 98402-8271</a><br />
      <span class="text-green-400">Website:</span> <a href="https://leonnebrito.com.br" target="_blank" class="text-blue-400">leonnebrito.com.br</a><br />
      <span class="text-green-400">GitHub:</span> <a href="https://github.com/LeonneBrito" target="_blank" class="text-blue-400">github.com/LeonneBrito</a><br />
      <span class="text-green-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/leonnebrito/" target="_blank" class="text-blue-400">linkedin.com/in/leonnebrito</a><br />
      `,
  },
  skills: {
    input: 'skills',
    output: `
      <span class="text-green-400">Languages:</span> JavaScript, TypeScript, HTML, CSS<br />
      <span class="text-green-400">Frameworks:</span> React, Next.js, Vue.js, Nuxt.js, Nest.js, Express.js<br />
      <span class="text-green-400">Databases:</span> MongoDB, MySQL, PostgreSQL, Redis<br />
      <span class="text-green-400">Tools:</span> Git, Docker, Linux, Apache, AWS, Azure<br />
      <span class="text-green-400">Soft Skills:</span> Teamwork, Communication, Problem Solving, Time Management, Adaptability<br />
      `,
  },
  carrer: {
    input: 'carrer',
    output: `
      <span class="text-green-400">nav9</span> - <a href="https://www.nav9.tech/" target="_blank" class="text-blue-400">nav9.tech</a><br />
      <span class="text-green-400">LS Brito Tecnologia</span> - <a href="https://leonnebrito.com.br" target="_blank" class="text-blue-400">leonnebrito.com.br</a><br />
      <span class="text-green-400">Globalsys Soluções em TI</span> - <a href="https://globalsys.com.br/r" target="_blank" class="text-blue-400">globalsys.com.br</a><br />
      <span class="text-green-400">Reserva</span> - <a href="https://usereserva.com/" target="_blank" class="text-blue-400">usereserva.com</a><br />
      <span class="text-green-400">Sem Parar</span> - <a href="https://www.semparar.com.br/" target="_blank" class="text-blue-400">semparar.com.br</a><br />
      <span class="text-green-400">TriggoLabs</span> - <a href="https://www.triggolabs.com/" target="_blank" class="text-blue-400">triggolabs.com</a><br />
      <span class="text-green-400">Trivod</span> - <a href="https://www.trivod.com/" target="_blank" class="text-blue-400">trivod.com</a><br />
      `,
  },
  contact: {
    input: 'contact',
    output: `
      <span class="text-green-400">Email:</span> <a href="mailto:britoleonne@gmail.com" target="_blank" class="text-blue-400">britoleonne@gmail.com</a><br />
      <span class="text-green-400">Phone:</span> <a href="tel:+5594984028271" target="_blank" class="text-blue-400">+55 (94) 98402-8271</a><br />
    `,
  },
  exit: {
    input: 'exit',
    output: '',
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
    if (command && command.input === 'clear') {
      dispatch({ type: ActionType.ClearHistory })
    } else if (command) {
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
