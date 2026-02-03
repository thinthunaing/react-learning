import Button from "../Button/Button"
import ToggleButton from "../Toggle/ToggleButton"
export default function MenuButton({ children }) {
    
    return (
        <ToggleButton>
            <Button>
                {children}
            </Button>
        </ToggleButton>
    )
}