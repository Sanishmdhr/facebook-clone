import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/38818096_972232459625944_7848431320391745536_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=CreGs9hPoiIAX-BISbf&_nc_oc=AQmT68od2bH9RPN1eNucDGTUPeiPCzE9z3u7ESLCOidKQDVucE8H80SvbwMQNAFey5lQuPsX64FHUD8XnPpcRCSU&_nc_ht=scontent.fktm8-1.fna&oh=22ff37bc751bef717620aae91b8c933b&oe=5F89E0E7" 
      title="Sanish Manandhar" />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />

    </div>
  )
}

export default Sidebar
