import logo from '../assets/images/chef-claude-icon.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Chef Claude Logo" className="logo" />
      <h1>Chef Claude</h1>
    </header>
  )
}