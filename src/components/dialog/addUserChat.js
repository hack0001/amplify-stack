import React, { useEffect, useState, Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { API, graphqlOperation } from "aws-amplify";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { listChatUsers } from "./graphql/graphql";

const DialogComponent = ({
	openDialog,
	closeFunc,
	classes,
	chatDetails,
	setChatDetails,
	chatCreator,
}) => {
	const [checked, setChecked] = useState([]);
	const [chatUsers, setChatUsers] = useState([]);

	const closeDialog = e => {
		closeFunc(false);
	};

	useEffect(() => {
		handleUserDialog();
	}, []);

	const handleUserDialog = async () => {
		const { data } = await API.graphql(graphqlOperation(listChatUsers));
		const filteredChatUsers = data.listChatUsers.items.filter(
			item => item.username !== chatCreator.username,
		);
		setChatUsers(filteredChatUsers);
	};

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChatDetails({
			...chatDetails,
			users: newChecked,
		});
		setChecked(newChecked);
	};

	return (
		<Dialog
			open={openDialog}
			onClose={closeDialog}
			aria-labelledby="draggable-dialog-title"
		>
			<DialogTitle id="draggable-dialog-title">
				Add Users to the Chat
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Click below to add users to the chat
				</DialogContentText>
			</DialogContent>
			<List dense className={classes}>
				{chatUsers.map(value => {
					const labelId = `checkbox-list-secondary-label-${value}`;
					return (
						<ListItem key={value.username} button onClick={handleToggle(value)}>
							<ListItemAvatar>
								<Avatar alt={`${value.username}`}>
									{value.user.profilePic ? (
										<img
											src={value.user.profilePic}
											style={{ width: 40 }}
											alt={"profile_pic"}
										/>
									) : (
										<PersonIcon style={{ margin: 0 }} />
									)}
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								id={labelId}
								primary={`${value.alias}`}
								secondary={<Fragment>{value.username}</Fragment>}
							/>
							<ListItemSecondaryAction>
								<Checkbox
									edge="end"
									onChange={handleToggle(value)}
									checked={checked.indexOf(value) !== -1}
									inputProps={{ "aria-labelledby": labelId }}
								/>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
			<DialogActions>
				<Button
					onClick={e => {
						setChatDetails({
							...chatDetails,
							users: [],
						});
						setChecked([]);
						closeDialog();
					}}
					color="primary"
				>
					Remove
				</Button>
				<Button
					onClick={e => {
						closeDialog();
					}}
					color="secondary"
				>
					Add
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default DialogComponent;
