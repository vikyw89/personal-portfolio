import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const Footer = () => {
    return (
      <div className='fixed bottom-0 left-0 right-0 flex justify-between w-full p-3'>
        <button className='flex w-full justify-start'>
          <ArrowLeftIcon />
          <h1>
            .prev()
          </h1>
        </button>
        <button className='flex w-full justify-end'>
          <h1>
            .next()
          </h1>
          <ArrowRightIcon />
        </button>
      </div>
    )
  }