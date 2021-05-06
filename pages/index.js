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
        <li>
          <Link href="/Tabs">
            <a>Tabs</a>
          </Link>
        </li>
        <li>
          <Link href="/Reviews">
            <a>Reviews</a>
          </Link>
        </li>
        <li>
          <Link href="/Navbar">
            <a>Navbar</a>
          </Link>
        </li>
        <li>
          <Link href="/Grocery_Bug">
            <a>Grucery Bug</a>
          </Link>
        </li>
        <li>
          <Link href="/SideBarModel">
            <a>Slide Bar Model</a>
          </Link>
        </li>
        <li>
          <Link href="/Login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/Register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="/Lorem">
            <a>Lorem</a>
          </Link>
        </li>
        <li>
          <Link href="/StripeMenu">
            <a>StripeMenu</a>
          </Link>
        </li>
        <li>
          <Link href="/Cart">
            <a>Cart</a>
          </Link>
        </li>
        <li>
          <Link href="/Cocktails">
            <a>Cocktails</a>
          </Link>
        </li>
        <hr />
        <li>
          <Link href="/DarkMode">
            <a>DarkMode</a>
          </Link>
        </li>
        
        
      </ul>
    </div>
  )
}

export default HomePage
