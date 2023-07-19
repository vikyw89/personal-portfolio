'use client'

import StarIcon from '@mui/icons-material/Star'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { AnimatedMe } from './animatedMe'

const content = {
  links: {
    linkedIn: 'https://www.linkedin.com/in/vikyweb/',
    github: 'https://github.com/vikyw89',
    gmail: 'vikyw89@gmail.com',
    whatsApp: `https://wa.me/+6281234001700?text=${encodeURIComponent('I found you from your portfolio site')}`,
    repo: 'https://github.com/vikyw89/personal-portfolio',
    resume: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/030723_Daniel_Viky_Wahjoedin_Resume.pdf?alt=media&token=5e3a5a3a-6fb4-4c84-a1c8-81a18e8da169'
  },
  backstory: 'someone with a mixed experience in architectural engineering and web developments',
  bio: {
    name: 'viky',
    level: '??/??',
    class: 'web developer',
    race: 'human',
    origin: 'earth'
  },
  abilities: [
    'self learner',
    'solution finder',
    'job exp bonus'
  ],
  technicalExperience: {
    languages: [
      'Javascript', 'Typescript', 'Python', 'HTML5', 'CSS3', 'SQL', 'bash', 'C'
    ],
    frameworks: [
      'NextJS', 'Flask', 'Express'
    ],
    tooling: [
      'webpack', 'Vite', 'prettier', 'eslint', 'typedoc', 'docker', 'infisical', 'docker'
    ],
    libraries: [
      'framer-motion', 'threeJS', 'swiper', 'bootstrap', 'material-ui', 'tailwindCSS', 'daisy-ui', 'react-router', 'redux', 'zustand'
    ],
    testing: [
      'jest', 'vitest'
    ],
    'ci/cd': [
      'github action'
    ],
    databases: [
      'postgreSQL', 'firestore', 'mongodb'
    ],
    orm: [
      'prisma'
    ],
    hosting: [
      'vercel', 'github page', 'firebase', 'fly.io', 'netlify', 'cyclic.sh', 'railway.app'
    ]
  },
  likes: {
    OS: ['fedora', 'android'],
    genre: ['sci/fi', 'adventure', 'fantasy'],
    music: ['pop', 'rock', 'ost'],
    person: ['Irene']
  }
}

const itemVariants: Variants = {
  intro: {
    opacity: 1,
    clipPath: ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
  },
}

export const IntroductionComponent = () => {

  return (
    <motion.div className="text-base-content  grid grid-cols-[3fr_1fr] grid-rows-[repeat(5,minmax(45px,max-content))] relative mt-20 mb-20 self-center xl:grid-cols-[4fr_1fr_2fr]"
      initial={{
        clipPath: 'inset(0 100% 0 0)'
      }}
      variants={{
        intro: {
          clipPath: 'inset(0 0 0 0)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.3
          }
        }
      }}
      animate='intro'
    >
      <motion.div className="row-[1/2] p-6 col-[1/-1] max-w-[50vw] z-50 relative pb-10 sm:p-10 intro">
        {Object.entries(content.bio).map((v, i) => {
          return (
            <div key={i}>
              <motion.h1 className="font-extrabold" variants={itemVariants}>
                .{v[0]}
              </motion.h1>
              <motion.h1 className="pl-5" variants={itemVariants}>
                {v[1]}
              </motion.h1>
            </div>
          )
        })}
      </motion.div>
      <Marquee autoFill speed={10} className="h-6 row-[2/3] col-[1/-1] absolute -top-6 cursor-default">
        <motion.span className="font-extrabold text-primary z-10"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 3 + (5 * 0.3)
          }}
        >
          VIKY&nbsp;&nbsp;
        </motion.span>
      </Marquee>
      <motion.div className="text-primary-content font-mono flex items-center bg-primary w-full font-bold p-5 pl-20 absolute z-40 row-[2/3] col-[1/-1]"
        initial={{
          scaleY: 0,
          scaleX: 0
        }}
        animate={{
          scaleY: [0, 0.02, 0.2, 0.2, 1],
          scaleX: [0, 0, 1, 1, 1],
          transition: {
            duration: 3
          }
        }}
      >
        {new Array(5).fill(null).map((v, i) => {
          return (
            <motion.li key={i}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 10, 1] }}
              transition={{
                type: 'spring',
                damping: 2,
                delay: (i * 0.3) + 3
              }}
              className='list-none'>
              <StarIcon />
            </motion.li>)
        })}
      </motion.div>
      <motion.div className="col-[2/3] row-[1/5] z-40 relative w-full h-full" variants={itemVariants}>
        <AnimatedMe />
      </motion.div>
      <motion.div className="col-[1/-1] row-[3/4] p-6 relative z-50 max-w-[50vw] sm:p-10 sm:pr-0 sm:max-w-[70vw] xl:col-[1/2">
        <motion.h1 className="font-extrabold" variants={itemVariants}>
          .abilities
        </motion.h1>
        {content.abilities.map((v, i) => {
          return (
            <motion.h1 key={i} variants={itemVariants} className='pl-5'>
              {v}
            </motion.h1 >
          )
        })}
        <motion.h1 className="font-extrabold sm:hidden" variants={itemVariants}>
          .backStory
        </motion.h1>
        <motion.div className="grid pl-5 sm:hidden">
          <motion.h1 variants={itemVariants}>
            {content.backstory}
          </motion.h1>
        </motion.div>
        <motion.h1 className="font-extrabold hidden sm:block" variants={itemVariants}>
          .technicalExperiences
        </motion.h1>
        <motion.div className="hidden sm:grid pl-5">
          {Object.entries(content.technicalExperience).map((v, i) => {
            return (
              <motion.div key={i} variants={itemVariants}>
                <span className='font-bold'>{v[0]}:</span>{v[1].map((v, i) => <span key={i}>{` ${v} |`}</span>)}
              </motion.div >
            )
          })}
          <motion.h1 variants={itemVariants}>
            ...
          </motion.h1>
        </motion.div>
      </motion.div>
      <div className="inventory hidden xl:col-[3/-1] xl:row-[1/2] xl:z-50 xl:p-10 xl:block">
        <motion.h1 className="font-extrabold" variants={itemVariants}>
          .backStory
        </motion.h1>
        <motion.div className="grid pl-5">
          <motion.h1 variants={itemVariants}>
            {content.backstory}
          </motion.h1>
        </motion.div>
        <motion.h1 className="font-extrabold" variants={itemVariants}>
          .likes
        </motion.h1>
        <motion.div className="grid pl-5" variants={itemVariants}>
          {Object.entries(content.likes).map((v, i) => {
            return (
              <motion.h1 key={i} variants={itemVariants}>
                <span className='font-bold'>{v[0]}:</span>{v[1].map((v, i) => <span key={i}>{` ${v} |`}</span>)}
              </motion.h1>
            )
          })}
        </motion.div>
      </div>
      <motion.div className="inventory hidden xl:col-[3/-1] xl:row-[3/4] xl:z-50 xl:p-10 xl:block">
        <motion.h1 className="font-extrabold" variants={itemVariants}>
          .links
        </motion.h1>
        <ul className='grid pl-5'>
          {Object.entries(content.links).map((v, i) => {
            return (
              <motion.li key={i} variants={itemVariants}>
                <Link target="_blank" rel="noopener noreferrer" href={v[1]}>
                  <span>.{v[0]}</span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </motion.div>
    </motion.div>
  )
}