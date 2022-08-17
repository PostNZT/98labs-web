import Link from 'next/link'

import { Container } from '../../commons/Container'
import { NavLink } from '../../commons/NavLink'
import { Logo } from '../../icons/Logo'
import { Button } from '../../commons/Button'
import { MobileNavigation } from '../../commons/MobileNavigation'

export function NavBar() {
  return (
    <>
      <header className='py-10'>
        <Container>
          <nav className='relative z-50 flex justify-between'>
            <Link href='#' aria-label='Home'>
              <Logo className='h-10 w-auto' />
            </Link>
            <div className='hidden md:flex md:gap-x-6'>
              <NavLink href='#'>About</NavLink>
              <NavLink href='#'>Our Team</NavLink>
              <NavLink href='#'>Projects</NavLink>
            </div>
            <div className='flex items-center gap-x-5 md:gap-x-8'>
              <Button href='#' color='red'>
                <span>
                  Get Started <span className='hidden lg:inline'>today</span>
                </span>
              </Button>
              <div className='-mr-1 md:hidden'>
                <MobileNavigation />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}