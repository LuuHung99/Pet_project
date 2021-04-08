import Link from 'next/link'
// import ReminderComplete from '../components/ReminderComplete/index'
// import ToursComplete from '../components/ToursComplete/index'
// import Layout from '../components/Layout/index'
// import Menu from '../components/Menu/theMenu'

function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/ReminderComplete">
            <a>ReminderComplete </a>
          </Link>
        </li>
        <li>
          <Link href="/ToursComplete">
            <a>ToursComplete</a>
          </Link>
        </li>
        <li>
          <Link href="/ReviewsComplete">
            <a>ReviewsComplete</a>
          </Link>
        </li>
        <li>
          <Link href="/Accordion">
            <a>Accordion</a>
          </Link>
        </li>
        <li>
          <Link href="/OurMenu">
            <a>OurMenus</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
