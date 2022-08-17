import { Container } from '../../commons/Container'
import { Qoute } from '../../icons/Qoute'
import Image from 'next/future/image'

import avatarImage1 from '../../images/avatars/avatar-1.png'
import avatarImage2 from '../../images/avatars/avatar-2.png'
import avatarImage3 from '../../images/avatars/avatar-3.png'
import avatarImage4 from '../../images/avatars/avatar-4.png'
import avatarImage5 from '../../images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        '98Labs is so easy to use I can’t help but wonder if it’s really doing the things the world expects me to do.',
      author: {
        name: 'Sheryl Worship',
        role: 'Neophytes',
        image: avatarImage1,
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Rudger',
        role: 'Director of Asurascans',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'The best part about 98Labs is every time I connect with them about the game I wanted added as a feature, they always get back to me as soon as possible.',
      author: {
        name: 'Carl Knudsen',
        role: 'Founder of Discordia',
        image: avatarImage5,
      },
    },
    {
      content:
        'There are so many things I had to do with my old game provider that its just easy with 98Labs. I love it.',
      author: {
        name: 'Erica Bot',
        role: 'COO at Cult of Silence',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'I used to have the old company providing with a lot of bugs and with 98Labs I somehow don’t have to do that anymore. Nervous but excited!',
      author: {
        name: 'Ryan Reynolds',
        role: 'Founder of Zeus',
        image: avatarImage3,
      },
    },
    {
      content:
        'First email I’ve sent to your support team. I am being replied ASAP. Awesome!',
      author: {
        name: 'Amy Peru',
        role: 'Director at ParadoX',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id='testimonials'
      aria-label='What our customers are saying'
      className='bg-slate-50 py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl md:text-center'>
          <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>
            Loved by customers worldwide.
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Our company is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            a lot of issues.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3'
        >
         {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}