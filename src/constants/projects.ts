import {
  BarChart3,
  Castle,
  Gamepad2,
  Joystick,
  Landmark,
  LucideIcon,
} from 'lucide-react'

export interface Project {
  key: string
  link: string
  icon: LucideIcon
}

export const projects: Project[] = [
  {
    key: 'overhillGames',
    link: 'https://www.overhill.games/',
    icon: Joystick,
  },
  {
    key: 'noverisRp',
    link: 'https://www.noverisrp.com.br/',
    icon: Castle,
  },
  {
    key: 'brotarComunicacao',
    link: 'https://www.brotarcomunicacao.com.br/',
    icon: BarChart3,
  },
  {
    key: 'tiaju10',
    link: 'https://www.tiaju10.com.br/',
    icon: Landmark,
  },
  {
    key: 'condadoBraveheart',
    link: 'https://condadobraveheart.com/forums/',
    icon: Gamepad2,
  },
]
