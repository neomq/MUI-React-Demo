import { styled, InputBase } from '@mui/material'

interface TextInputProps {
    icon?: JSX.Element
    width: string
    width_sm?: string
    placeholder: string
}

const TextInput = ({ icon, width, width_sm, placeholder }: TextInputProps) => {

    const TextBox = styled("div")(({ theme }) => ({
        backgroundColor: "#FAFCFF",
        padding: "8px 16px",
        borderRadius: "12px",
        width: width,
        [theme.breakpoints.down("sm")]: {
            width: width_sm ? width_sm : width,
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px"
    }))

    return (
        <TextBox>
            {icon && icon}
            <InputBase
                placeholder={placeholder}
                sx={{
                    fontSize: "14px",
                    width: "100%",
                    color: "#8095B3",
                    ".MuiInputBase-input::placeholder": {
                        opacity: .6,
                        color: "#8095B3"
                    }
                }}
            />
        </TextBox>
    )
}

export default TextInput