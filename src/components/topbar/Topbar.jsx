import "./topbar.css";
import {Search,Person, Chat, Notifications} from "@mui/icons-material";

const Topbar = () => {
  return (
      <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Connectivo</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="Search for friend, post or video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIcanBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIcanBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIcanBadge">1</span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
  )
}

export default Topbar
