import React from 'react';
import './Sidebar.css';

import SidebarChat from '../SidebarChat/SidebarChat';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SearchOutlined from '@material-ui/icons/SearchOutlined';

import { Avatar, IconButton } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=jirskmYHvh0AX-xjLaG&_nc_ht=scontent.fbeg7-1.fna&oh=442ba1a528f0447ebdaacb8341164d99&oe=5F7B6620" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">

                <SidebarChat />

                <SidebarChat />

                <SidebarChat />

                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
