import { PropsWithChildren } from 'react'

export const Badge = ({ children }: PropsWithChildren) => (
  <li className="text-blue-700 px-1 border border-blue-500 rounded text-xs lg:text-sm">
    {children}
  </li>
)
