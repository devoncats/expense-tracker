import Link from 'next/link'

export default function Sites ({ index, url, icon, name }) {
  return (
    <li key={index}>
      <Link className='flex items-center gap-2' href={url}>{icon}{name}</Link>
    </li>
  )
}
