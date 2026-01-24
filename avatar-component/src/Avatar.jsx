import { User } from "lucide-react";
import classNames from "classnames";


export default function Avatar({children}) {

    const randomColor = ['navy', 'pink', 'red', 'blue', 'green'][Math.floor(Math.random() * 5)];

    // Determine classes based on children type
   // If children is a string, it's initials; if no children, it's anonymous
    const letter = children && typeof children === 'string' ? "avatar-letters" : "";
    const icon = !children ? "avatar-icon" : "";
    const avatarClass = classNames("avatar", letter, icon, 
        // Add random color only for initials or icon avatars
                (letter || icon) && randomColor);


   
        return (
            <div className={avatarClass}>
                {!children ? <User /> : children}
              
            </div>
        )
}
