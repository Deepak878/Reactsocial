
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos
            </span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks
            </span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions
            </span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events
            </span>
          </li>
          <li className="sidebarListItem">
            <AutoStoriesIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses
            </span>
          </li>
        </ul>
        <button className="sidebarButton">
          Show More
        </button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendist">
          {Users.map(u => (
            <CloseFriend key={u.id} user={u}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}
