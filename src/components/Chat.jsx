import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LogoPink from '../assets/img/logo-pink.png'
import Lstep from '../assets/img/Lstep.jpeg'

const Chat = (props) => {
  // 質問かどうかの判断
  const isQustion = (props.type === 'question');
  const classes = isQustion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQustion ? (
          <Avatar alt='icon' src={LogoPink} />
        ) : (
          <Avatar alt='icon' src={Lstep} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">
        {props.text}
      </div>
    </ListItem>
  )
}
export default Chat 