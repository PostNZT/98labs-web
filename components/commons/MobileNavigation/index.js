import { Fragment } from 'react'
import { MobileNav } from '../../icons/MobileNav'
import { Popover, Transition } from '@headlessui/react'
import { MobileNavLink } from '../MobileNavLink'

export function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNav open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
          >
            <hr className='m-2 border-slate-300/40' />
            <MobileNavLink href='#'>About</MobileNavLink>
            <MobileNavLink href='#'>Our Team</MobileNavLink>
            <MobileNavLink href='#'>Projects</MobileNavLink>
            <hr className='m-2 border-slate-300/40' />
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}