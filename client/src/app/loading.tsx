'use client'

import { ReactFitty } from 'react-fitty'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center">
      <ReactFitty>
        LOADING
      </ReactFitty>
    </div>
  )
}

export default Loading