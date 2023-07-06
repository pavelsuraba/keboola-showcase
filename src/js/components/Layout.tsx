import { PropsWithChildren, memo } from 'react'
import { twMerge } from 'tailwind-merge'
import { KeboolaLogo } from './Icons'
import { Link } from 'react-router-dom'

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={twMerge('px-4 max-w-7xl mx-auto', className)}>{children}</div>
)

const HeaderPure = () => (
  <header className="bg-white shadow shadow-gray-200">
    <Container className="flex py-3">
      <Link to="/">
        <KeboolaLogo />
      </Link>

      <div className="pl-3 pt-0.5">
        <p className=" text-gray-400 font-medium">Keboola</p>
        <p className="font-medium text-base leading-none">user@gmail.com</p>
      </div>
    </Container>
  </header>
)

export const Header = memo(HeaderPure)
