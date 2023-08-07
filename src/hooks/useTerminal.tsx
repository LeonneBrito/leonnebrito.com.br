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
      <span class="text-[#E0DEF2]">help</span> - Show this help message.<br />
      <span class="text-[#E0DEF2]">clear</span> - Clear the terminal screen.<br />
      <span class="text-[#E0DEF2]">whoami</span> - Show information about me.<br />
      <span class="text-[#E0DEF2]">skills</span> - Show my skills.<br />
      <span class="text-[#E0DEF2]">carrer</span> - Show my carrer.<br />
      <span class="text-[#E0DEF2]">education</span> - Show my education.<br />
      <span class="text-[#E0DEF2]">setup</span> - Show my setup.<br />
      <span class="text-[#E0DEF2]">contact</span> - Show my contact information.<br />
      <span class="text-[#E0DEF2]">exit</span> - Exit the terminal.<br />
    `,
  },
  clear: {
    input: 'clear',
    output: '',
  },
  whoami: {
    input: 'whoami',
    output: `
      <span class="text-[#E0DEF2]">Name:</span> Leonne Brito<br />
      <span class="text-[#E0DEF2]">Age:</span> 24<br />
      <span class="text-[#E0DEF2]">Location:</span> Parauapebas, Pará - Brazil<br />
      <span class="text-[#E0DEF2]">Occupation:</span> Software Engineer<br />
      <span class="text-[#E0DEF2]">Company:</span> <a href="https://www.nav9.tech/" target="_blank" class="text-blue-400">nav9</a><br />
      <span class="text-[#E0DEF2]">Email:</span> <a href="mailto:britoleonne@gmail.com" target="_blank" class="text-blue-400"> britoleonne@gmail.com</a><br />
      <span class="text-[#E0DEF2]">Phone:</span> <a href="tel:+5594984028271" target="_blank" class="text-blue-400">+55 (94) 98402-8271</a><br />
      <span class="text-[#E0DEF2]">Website:</span> <a href="https://leonnebrito.com.br" target="_blank" class="text-blue-400">leonnebrito.com.br</a><br />
      <span class="text-[#E0DEF2]">GitHub:</span> <a href="https://github.com/LeonneBrito" target="_blank" class="text-blue-400">github.com/LeonneBrito</a><br />
      <span class="text-[#E0DEF2]">LinkedIn:</span> <a href="https://www.linkedin.com/in/leonnebrito/" target="_blank" class="text-blue-400">linkedin.com/in/leonnebrito</a><br />
      `,
  },
  skills: {
    input: 'skills',
    output: `
      <span class="text-[#E0DEF2]">Languages:</span> JavaScript, TypeScript, HTML, CSS<br />
      <span class="text-[#E0DEF2]">Frameworks:</span> React, Next.js, Vue.js, Nuxt.js, Nest.js, Express.js<br />
      <span class="text-[#E0DEF2]">Styling:</span> TailwindCSS, Bootstrap, Material UI, SASS, Styled Components<br />
      <span class="text-[#E0DEF2]">Databases:</span> MongoDB, MySQL, PostgreSQL, Redis<br />
      <span class="text-[#E0DEF2]">Tools:</span> Git, Docker, Linux, Apache, AWS, Azure<br />
      <span class="text-[#E0DEF2]">Design:</span> Figma, Adobe XD, Adobe Photoshop<br />
      <span class="text-[#E0DEF2]">Hard Skills:</span> Problem Solving, Object Oriented Programming, Functional Programming, Data Structures, Algorithms<br />
      <span class="text-[#E0DEF2]">Soft Skills:</span> Teamwork, Communication, Problem Solving, Time Management, Adaptability<br />
      <span class="text-[#E0DEF2]">Other:</span> Node.js, React Native, Flutter, Electron, GraphQL <br />`,
  },
  education: {
    input: 'education',
    output: `
      <span class="text-[#E0DEF2]">Ignite - Rocketseat</span><br />
      <span class="text-[#E0DEF2]">JStack</span><br />
      `,
  },
  carrer: {
    input: 'carrer',
    output: `
      <span class="text-[#E0DEF2]">Nav9</span> - <a href="https://www.nav9.tech/" target="_blank" class="text-blue-400">nav9.tech</a> <span class="text-[#8F8CA8]">(Ago 2022 - present)</span><br />
      <span class="text-[#E0DEF2]">LS Brito Tecnologia</span> - <a href="https://leonnebrito.com.br" target="_blank" class="text-blue-400">leonnebrito.com.br</a> <span class="text-[#8F8CA8]">(Jan 2017 - present)</span><br />
      <span class="text-[#E0DEF2]">Globalsys Soluções em TI</span> - <a href="https://globalsys.com.br/r" target="_blank" class="text-blue-400">globalsys.com.br</a> <span class="text-[#8F8CA8]">(Jun 2021 - Ago 2022)</span><br />
      <span class="text-[#E0DEF2]">Reserva</span> - <a href="https://usereserva.com/" target="_blank" class="text-blue-400">usereserva.com</a> <span class="text-[#8F8CA8]">(Jun 2021 - Ago 2022)</span><br />
      <span class="text-[#E0DEF2]">Sem Parar</span> - <a href="https://www.semparar.com.br/" target="_blank" class="text-blue-400">semparar.com.br</a> <span class="text-[#8F8CA8]">(Abr 2022 - Jun 2022)</span><br />
      <span class="text-[#E0DEF2]">TriggoLabs</span> - <a href="https://www.triggolabs.com/" target="_blank" class="text-blue-400">triggolabs.com</a> <span class="text-[#8F8CA8]">(Abr 2022 - Jun 2022)</span><br />
      <span class="text-[#E0DEF2]">Trivod</span> - <a href="https://www.trivod.com/" target="_blank" class="text-blue-400">trivod.com</a> <span class="text-[#8F8CA8]">(Jan 2022 - Fev 2022)</span><br />
      `,
  },
  setup: {
    input: 'setup',
    output: `
      <span class="text-[#E0DEF2]">Computer:</span> Mac Mini M1 (16GB)<br />
      <span class="text-[#E0DEF2]">Keyboard:</span> Keychron K2<br />
      <span class="text-[#E0DEF2]">Mouse:</span> Logitech MX Master 3S<br />
      <span class="text-[#E0DEF2]">Monitors:</span> LG 29" Ultrawide & Dell 24" Full HD<br />
      <span class="text-[#E0DEF2]">Audio:</span> AirPods Pro<br />
      <span class="text-[#E0DEF2]">Editor:</span> VSCode<br />
      <span class="text-[#E0DEF2]">Terminal:</span> Fish<br />
      `,
  },
  contact: {
    input: 'contact',
    output: `
      <span class="text-[#E0DEF2]">Email:</span> <a href="mailto:britoleonne@gmail.com" target="_blank" class="text-blue-400">britoleonne@gmail.com</a><br />
      <span class="text-[#E0DEF2]">Phone:</span> <a href="tel:+5594984028271" target="_blank" class="text-blue-400">+55 (94) 98402-8271</a><br />
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
