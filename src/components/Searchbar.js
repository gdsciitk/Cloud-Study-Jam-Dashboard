import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";
import { InputBase, alpha } from "@mui/material";

export default function Searchbar({value, handleChange}) {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: alpha(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(.8),
        width: '100%',
        borderRadius: 8,
        backgroundColor: theme.palette.mode == 'dark' ?  '#303030': '#f5f5f5'
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 179),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(1)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
        },
    }));

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search"
                onChange={(event) => handleChange(event.target.value)}
                value={value}
                autoFocus
            />
        </Search>
    );
}