import React, { Fragment, useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles/chatStyles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";

const Messages = ({ messages, convoUserId, classes }) => {
	if (!messages[0]) return <div />;
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [messages]);

	messages = messages.sort(
		(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
	);
	return (
		<Fragment>
			{messages.map(message => {
				let backColor = "pink";
				let direction = "row";

				if (message.authorId !== convoUserId) {
					backColor = "#3f51b5";
					direction = "row-reverse";
				}

				return (
					<div
						className={classes.chatMessage}
						style={{ flexDirection: direction }}
						key={message.id}
					>
						<div>
							<div className={classes.avatarBlock}>
								<Avatar className={classes.avatar}>
									{message.author.profilePic ? (
										<img
											src={message.author.profilePic}
											style={{ width: 40 }}
											alt={"profile_pic"}
										/>
									) : (
										<PersonIcon style={{ margin: 0 }} />
									)}
								</Avatar>
							</div>
							<p className={classes.msgAuthor}>{message.author.alias}</p>
						</div>
						<Tooltip
							title={moment(message.createdAt).calendar()}
							placement="right-start"
						>
							<div className={classes.contentBlock}>
								<p
									className={classes.content}
									style={{ backgroundColor: backColor }}
								>
									{message.content}
								</p>
							</div>
						</Tooltip>
					</div>
				);
			})}
			<div ref={messagesEndRef} />
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Messages);
