import './App.css'
import bob from './images/bob.jpg';
import Avatar from './Avatar'

/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function App() {
    return (
        <main>
          <Avatar>
            BZ
          </Avatar>
          <Avatar>
            BZ
          </Avatar>
          <Avatar>
            BZ
          </Avatar>
          <Avatar>
            <img 
              src={bob}
              alt="Bob avatar" 
            />
          </Avatar>
         <Avatar/> 
         <Avatar/> 
        </main>
    )
}