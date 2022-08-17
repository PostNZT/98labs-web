import Image from 'next/future/image'

import { Container } from '../../commons/Container'
import { Slash } from '../../icons/Slash'
import { Button } from '../../commons/Button'
import { Chevron } from '../../icons/Chevron'
import logoLaravel from '../../images/laravel.svg'
import logoStatic from '../../images/statickit.svg'
import logoTransistor from '../../images/transistor.svg'

export function Hero() {
  return (
    <Container className='pt-20 pb-16 text-center lg:pt-32'>
      <h1 className='mx-auto max-x-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
        Gaming{' '}
        <span className="relative whitespace-nowrap text-red-600">
          <Slash />
          <span className="relative">made possible!</span>
        </span>
      </h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
        Most game development studio are good, but hard to reach. We make the opposite trade-off! 
      </p>
      <div className='mt-10 flex justify-center gap-x-6'>
        <Button href="#">Connect with us</Button>
        <Button
          href='https://youtu.be/BBJa32lCaaY'
          variant='outline'
        >
          <Chevron />
          <span className='ml-3'>Watch video</span>
        </Button>
      </div>
      <div className='mt-36 lg:mt-44'>
        <p className='font-display text-base text-slate-900'>
          Trusted by these companies so far
        </p>
        <ul
          role='list'
          className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
        >
          {[
            [
              { name: 'Example', logo: logoLaravel },
              { name: 'Example2', logo: logoStatic},
              { name: 'Example3', logo: logoTransistor}
            ]
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role='list'
                className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
              >
                {group.map((company) => (
                  <li key={company.name} className='flex'>
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}