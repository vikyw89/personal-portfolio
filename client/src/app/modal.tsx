
export const Modal = ({ props }: any) => {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black bg-opacity-80" onClick={() => props.setWatchVideo(false)}>
      <video autoPlay className="aspect-auto bg-primary bg-opacity-50 backdrop-blur-sm w-full" muted loop>
        <source src={props.videoSrc} type="video/webm" />
      </video>
    </div>
  )
}