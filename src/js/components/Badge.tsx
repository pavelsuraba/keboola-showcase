import { PropsWithChildren } from 'react'

export const Badge = ({ children }: PropsWithChildren) => (
  <li className="text-blue-700 px-1 border border-blue-400 rounded">
    {children}
  </li>
)
