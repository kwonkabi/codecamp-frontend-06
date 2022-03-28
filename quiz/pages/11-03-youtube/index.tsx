import ReactPlayer from 'react-player'

export default function LibraryYoutubePage(){
  return <ReactPlayer url='https://youtu.be/Zd0siCk-OFY'
  width={800}
  height={600}
  playing={true}
  muted={true}
  />
}