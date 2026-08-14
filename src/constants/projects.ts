import { BarChart3, Gamepad2, Landmark, LucideIcon } from 'lucide-react'

export interface Project {
  key: string
  link: string
  icon: LucideIcon
}

export const projects: Project[] = [
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
