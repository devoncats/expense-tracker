import Link from 'next/link'
import styles from './sites.module.css'

export default function Sites ({ url, icon, name }) {
  return (
    <li className={`px-8 py-4 rounded-xl border border-[#ededed] h-fit hover:bg-[#ededed] hover:cursor-pointer ${styles.sites}`}>
      <Link className='flex items-center gap-4 text-lg' href={url}>
        {icon}
        {name}
      </Link>
    </li>
  )
}
