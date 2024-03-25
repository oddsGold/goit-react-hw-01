import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";
import friends  from "./friends.json";
import transactions from "./transactions.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Profile
              name={userData.username}
              tag={userData.tag}
              location={userData.location}
              image={userData.avatar}
              stats={userData.stats}
          />
          <FriendList friends={friends} />
          <TransactionHistory items={transactions} />
      </>
  )
}

export default App
