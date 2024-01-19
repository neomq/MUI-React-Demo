import React from 'react'
import { List, ListSubheader } from "@mui/material"
import { cardStyle } from '../../styles/styles'

interface ListWrapper {
    pb?: number
    title?: string
    children: React.ReactNode
}

const ListWrapper = ({ pb, title, children }: ListWrapper) => {
    const style = { ...cardStyle }
    if (pb) {
        style.paddingBottom = pb
    }

    return (
        <List sx={style} subheader={
            title &&
            <ListSubheader component="div" id="nested-list-subheader" sx={{ pt: "8px", pl: "32px", borderRadius: "8px", textTransform: "uppercase", color: "#8095B3", fontSize: "11px", fontWeight: "bold", letterSpacing: ".8px" }}>
                {title}
            </ListSubheader>
        }>
            {children}
        </List>
    )
}

export default ListWrapper