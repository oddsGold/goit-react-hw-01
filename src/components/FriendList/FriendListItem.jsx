import React from "react";
import item from "./FriendListItem.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <div className={item["friends-item"]}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={item["friends-item-name"]}>{name}</p>
            {
                isOnline ? <p className={item["friends-item-online"]}>Online</p> : <p className={item["friends-item-offline"]}>Offline</p>
            }
        </div>
    )
}

export default FriendListItem;