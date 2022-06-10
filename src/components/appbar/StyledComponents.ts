import { alpha, FormGroup, InputBase, styled } from "@mui/material";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)(({theme})=> ({
	textDecoration: "none",
	color: "black",
	opacity: 0.8
}));

export const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginRight: theme.spacing(2),
	marginLeft: theme.spacing(3),
	width: "auto",
	[theme.breakpoints.up('md')]: {
		width: "50%",
	}
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
	}
}));

export const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	paddingLeft: theme.spacing(1)
}));
