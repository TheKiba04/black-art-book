import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Theme } from '@mui/material/styles'

import User from '@/types/User'

const ProfileMenu = ({ user, signout }: { user: User; signout: () => void }) => {
	const navigate = useNavigate()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const open = Boolean(anchorEl)

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleMove = (url: string) => {
		navigate(url)
		handleClose()
	}

	const handleSignout = () => {
		signout()
		handleClose()
	}

	const navigateToProfile = () => handleMove('/profile')

	const stringAvatar = (name: string) => ({
		sx: {
			color: (theme: Theme) => theme.palette.secondary.dark,
		},
		children: `${name.split(' ')[0][0]}`,
	})

	return (
		<>
			<IconButton onClick={handleOpen}>
				<Avatar {...stringAvatar(user.fullname)} alt={user.fullname} src={user.avatarURL} />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={navigateToProfile}>Profile</MenuItem>
				<MenuItem onClick={handleSignout}>Logout</MenuItem>
			</Menu>
		</>
	)
}

export default ProfileMenu
