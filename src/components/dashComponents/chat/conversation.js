import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { styles } from "./styles/chatStyles";
import TextField from "@material-ui/core/TextField";
import { API, graphqlOperation } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createNewMessage, onCreateMessage } from "./graphql/chatGraphql";
import Messages from "./message";
import Button from "@material-ui/core/Button";

const Conversation = props => {
	const { classes, conversationId, conversationUserId } = props;
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState("");
	const [messages, setMessages] = useState([]);
	const [textMsg, setTextMsg] = useState([""]);
	const messageLimit = 5;

	useEffect(() => {
		getMessages(false);
	}, [conversationId]);

	useEffect(() => {
		updateSubscriptionMessages();
	}, []);

	const updateSubscriptionMessages = () => {
		try {
			const subscription = API.graphql(
				graphqlOperation(onCreateMessage),
			).subscribe({
				next: eventData => {
					setMessages(
						eventData.value.data.onCreateMessage.conversation.messages.items,
					);
				},
			});
			return () => subscription.unsubscribe();
		} catch (err) {
			console.log("Error with subscription", err);
		}
	};

	const getMessages = async loadMore => {
		try {
			setLoading(true);
			if (conversationId) {
				const isToken = loadMore && token ? `nextToken:"${token}",` : "";
				const { data } = await API.graphql(
					graphqlOperation(`query GetConversationMsgs{
						getConversation(id:"${conversationId}"){
						id 
						conversationCreator
						subject
						name				
						messages(${isToken}sortDirection:DESC, limit:${messageLimit}){
						items{
							authorId 
							content
							createdAt
							id
							author{
									alias
									profilePic
									}	
								}
								nextToken
								}
							}
						}
					`),
				);
				if (loadMore) {
					const newData = messages.concat(data.getConversation.messages.items);
					setMessages(newData);
				} else {
					setMessages(data.getConversation.messages.items);
				}
				setToken(data.getConversation.messages.nextToken);
				setLoading(false);
			} else {
				setLoading(false);
			}
		} catch (err) {
			console.log("Error occurred", err);
			setLoading(false);
		}
	};

	const createMessage = async e => {
		if (e.key !== "Enter") return;
		if (textMsg === "") return;

		const message = {
			messageConversationId: conversationId,
			content: textMsg,
			authorId: conversationUserId,
		};
		await API.graphql(graphqlOperation(createNewMessage, { input: message }));
		setTextMsg("");
	};

	const textDisabled = !conversationId ? true : false;
	return (
		<Fragment>
			{loading && <LinearProgress />}
			{(!messages[0] || !conversationId) && <div />}

			<div className={classes.chatPaper}>
				<Paper className={classes.chatBox} style={{ overflowY: "scroll" }}>
					{messages.length >= messageLimit - 1 && token && (
						<div
							style={{
								textAlign: "center",
							}}
						>
							<Button
								variant="contained"
								color="primary"
								align="center"
								onClick={e => {
									getMessages(true);
								}}
								style={{ padding: 8, width: "30%", marginTop: 10 }}
							>
								Load More...
							</Button>
						</div>
					)}
					<Messages messages={messages} convoUserId={conversationUserId} />
				</Paper>
				<TextField
					id="outlined-full-width"
					variant="outlined"
					autoComplete="off"
					value={textMsg}
					placeholder="Message"
					onChange={e => {
						setTextMsg(e.target.value);
					}}
					disabled={textDisabled}
					className={classes.input}
					onKeyDown={createMessage}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Conversation);
