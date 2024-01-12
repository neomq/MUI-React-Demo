import Button from '@mui/material/Button';
import { ButtonOwnProps } from "@mui/material";
import { buttonStyles } from '../styles/styles';

interface CommonButtonProps {
    style: string
}

const CommonButton = ({ children, style, ...rest }: ButtonOwnProps & CommonButtonProps) => {
    const { priBtn, outlineBtnLight } = buttonStyles
    
    const getStyle = () => {
        let styles = {}
        switch (style) {
            case "primaryBtn":
                styles = priBtn
                break;
            case "outlineBtnLight":
                styles = outlineBtnLight
                break;
            default:
                styles = priBtn
        }
        return styles
    }
    const btnsx = getStyle()
    console.log(btnsx)

    return (
        <Button {...rest} sx={btnsx}>
            {children}
        </Button>
    )
}

export default CommonButton