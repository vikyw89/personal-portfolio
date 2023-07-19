'use client'
import { motion } from 'framer-motion'
import { Card } from './card'

const data = [
  {
    title: 'myPhonebook',
    year: '2023',
    description: 'a responsive multi-user phonebook web app',
    tech: ['NextJS', 'Docker', 'noSQL', 'Firebase', 'ExpressJS', 'NodeJS', 'MaterialUI'],
    liveLink: 'https://myphonebook-app-dev.web.app/',
    repoLink: 'https://github.com/weaponsforge/my-phonebook',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FmyPhonebookCompressed.webm?alt=media&token=f46a0436-a5f3-4832-bca8-0c36e0b8cd44'
  },
  {
    title: 'pinterestClone',
    year: '2023',
    description: 'a responsive pinterest clone with a twist',
    tech: ['NextJS', 'postgreSQL', 'Supabase', 'Cloudinary', 'MaterialUI', 'TailwindCSS', 'DaisyUI'],
    liveLink: 'https://pinterest-clone-lemon.vercel.app/',
    repoLink: 'https://github.com/vikyw89/pinterestClone',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FpinterestCompressed.webm?alt=media&token=2c26f834-6cfc-4b02-ad9a-ecd711e7d549'
  },
  {
    title: 'wheresWaldo',
    year: '2023',
    description: 'desktop web game of where\'s waldo',
    tech: ['NextJS', 'Firebase', 'CSS Module'],
    liveLink: 'https://whereswaldo-f62b8.firebaseapp.com/',
    repoLink: 'https://github.com/vikyw89/wheresWaldo',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FwheresWaldoCompressed.webm?alt=media&token=85b99fb9-b6bd-4e4e-bc4d-13dbfff06cd8'
  },
  {
    title: 'ticTacToe',
    year: '2023',
    description: 'a ticTacToe game with a minimax algo and pruning',
    tech: ['VanillaJS', 'HTML', 'CSS'],
    liveLink: 'https://vikyw89.github.io/ticTacToe/',
    repoLink: 'https://github.com/vikyw89/ticTacToe',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FticTacToeCompressed.webm?alt=media&token=214c9030-d02a-44a6-bc60-a6e0a4f64a5f'
  },
  {
    title: 'useSyncV',
    year: '2023',
    description: 'plug&play react state management NPM library',
    tech: ['Typescript', 'NodeJS', 'NPM', 'React'],
    liveLink: 'https://www.npmjs.com/package/use-sync-v',
    repoLink: 'https://github.com/vikyw89/useSyncV',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FuseSyncVcompressed.webm?alt=media&token=89b0e67c-36cb-4dca-8c79-2ec9d2af13df'
  },
  // {
  //   title: 'calculator',
  //   year: '2022',
  //   description: 'mobile web calculator app - with recursive EMDA operation',
  //   tech: ['VanillaJS', 'CSS', 'HTML'],
  //   liveLink: 'https://vikyw89.github.io/calculator/',
  //   repoLink: 'https://github.com/vikyw89/calculator',
  //   videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FcalculatorCompressed.webm?alt=media&token=0d224592-6ac6-4712-b734-04e9677dd291'
  // },
]

export const ProjectCardContainer = () => {
  return (
    <motion.div
      className="pt-14 pb-14 inset-0 fixed overflow-y-scroll"
    >
      <div className="flex flex-col w-full overflow-x-hidden gap-3 sm:grid sm:grid-flow-row-dense sm:justify-center sm:overflow-y-hidden sm:gap-10 sm:p-10">
        {data.map((v, i) => {
          return (
            <Card key={i} props={{ ...v, 'index': i }} />
          )
        })}
      </div>
    </motion.div>
  )
}