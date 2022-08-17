import Link from "next/link"
import { Container } from "../../commons/Container"
import { Twitter } from "../../icons/Twitter"
import { Github } from "../../icons/Github"

export function Footer() {
  return (
    <footer className='bt-slate-50'>
      <Container>
        <div className='py-16'>
          <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <Link
                href="https://twitter.com/98labs"
                className="group"
                aria-label="98Labs on Twitter"
              >
                <Twitter />
              </Link>
              <Link
                href="https://github.com"
                className="group"
                aria-label="98Labs on GitHub"
              >
                <Github />
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright &copy; {new Date().getFullYear()} 98Labs. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}