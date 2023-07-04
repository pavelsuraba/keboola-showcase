import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { KeboolaLogo } from './Icons'

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={twMerge('px-4 max-w-7xl mx-auto', className)}>{children}</div>
)
export const Header = () => (
  <header className="bg-white shadow shadow-gray-200">
    <Container className="flex py-3">
      <KeboolaLogo />
      <h1 className="pl-3 pt-0.5 text-gray-400 font-medium">Keboola</h1>
    </Container>
  </header>
)
