import { PropsWithChildren, memo } from 'react'

const BadgePure = ({ children }: PropsWithChildren) => (
  <li className="text-blue-700 px-1 border border-blue-500 rounded text-xs lg:text-sm">
    {children}
  </li>
)

export const Badge = memo(BadgePure)
