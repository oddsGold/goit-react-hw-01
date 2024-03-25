import React from "react";
import list from "./FriendsList.module.css"
import FriendListItem from "./FriendListItem.jsx";

const FriendsList = ({friends}) => {
    return(
        <div className={list["friends-page"]}>
            <ul className={list["friends-list"]}>
                {
                    friends.map((item) => {
                        return(
                            <li key={item.id}>
                                <FriendListItem
                                    avatar={item.avatar}
                                    name={item.name}
                                    isOnline={item.isOnline}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FriendsList;