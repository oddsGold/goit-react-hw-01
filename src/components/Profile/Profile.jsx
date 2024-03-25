import React from "react";
import profile from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={profile.profile}>
            <div className={profile["profile-item"]}>
                <div className={profile["profile-info"]}>
                    <div className={profile["profile-icon"]}>
                        <img className={profile["profile-img"]} src={image} alt="User avatar"/>
                    </div>
                    <p className={profile["profile-name"]}>{name}</p>
                    <p className={profile["profile-tag"]}>{tag}</p>
                    <p className={profile["profile-location"]}>{location}</p>
                </div>
                <ul className={profile["profile-list"]}>
                    <li>
                        <span>Followers</span>
                        <span>{stats.followers}</span>
                    </li>
                    <li>
                        <span>Views</span>
                        <span>{stats.views}</span>
                    </li>
                    <li>
                        <span>Likes</span>
                        <span>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;