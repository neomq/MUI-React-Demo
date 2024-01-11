import Button from '@mui/material/Button';
import { ButtonOwnProps } from "@mui/material";

const CommonButton = ({ children, ...rest }: ButtonOwnProps) => {
    return (
        <Button {...rest}>
            {children}
        </Button>
    )
}

export default CommonButton