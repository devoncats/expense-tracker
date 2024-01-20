import Sites from '@/components/Dashboard/sites'
import Image from 'next/image'
import { BiGridAlt, BiHistory, BiLineChart, BiLineChartDown, BiLogOut, BiNotification, BiSlider, BiUser, BiWalletAlt } from 'react-icons/bi'

export default function SideBar () {
  const sites = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: <BiGridAlt />
    },
    {
      name: 'Income',
      url: '/income',
      icon: <BiLineChart />
    },
    {
      name: 'Expense',
      url: '/expense',
      icon: <BiLineChartDown />
    },
    {
      name: 'Savings',
      url: '/savings',
      icon: <BiWalletAlt />
    },
    {
      name: 'History',
      url: '/history',
      icon: <BiHistory />
    },
    {
      name: 'Accounts',
      url: '/accounts',
      icon: <BiUser />
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: <BiNotification />
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: <BiSlider />
    },
    {
      name: 'Logout',
      url: '/logout',
      icon: <BiLogOut />
    }
  ]

  return (
    <section>
      <Image
        src='/logo-light.svg'
        alt='logo'
        width={170}
        height={41}
      />

      <nav>
        <ul>
          {sites.map((site, index) => <Sites key={index} {...site} />)}
        </ul>
      </nav>
    </section>
  )
}
