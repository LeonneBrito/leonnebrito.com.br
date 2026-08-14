export type ExperienceRole =
  | 'seniorFullstack'
  | 'seniorSoftware'
  | 'midSoftware'

export interface Experience {
  role: ExperienceRole
  company: string
  link: string
  start: string
  end: string | null
}

export const experiences: Experience[] = [
  {
    role: 'seniorFullstack',
    company: 'Mevo',
    link: 'https://www.mevo.com.br/',
    start: '2025-09',
    end: '2026-08',
  },
  {
    role: 'seniorSoftware',
    company: 'Semantix',
    link: 'https://semantix.ai/',
    start: '2024-09',
    end: '2025-08',
  },
  {
    role: 'seniorSoftware',
    company: 'nav9',
    link: 'https://nav9.tech/',
    start: '2022-08',
    end: '2024-08',
  },
  {
    role: 'seniorSoftware',
    company: 'Futura Sistemas',
    link: 'https://futurasistemas.com.br/',
    start: '2023-09',
    end: '2024-05',
  },
  {
    role: 'midSoftware',
    company: 'Reserva',
    link: 'https://www.usereserva.com/',
    start: '2021-06',
    end: '2022-08',
  },
  {
    role: 'seniorSoftware',
    company: 'Sem Parar',
    link: 'https://www.semparar.com.br/',
    start: '2022-04',
    end: '2022-06',
  },
  {
    role: 'midSoftware',
    company: 'Trivod',
    link: 'https://www.trivod.com/',
    start: '2022-01',
    end: '2022-02',
  },
]
