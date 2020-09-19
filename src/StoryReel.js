import React from 'react'
import Story from './Story'
import './StoryReel.css'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

function StoryReel() {
  return (
    <div className="storyReel">
     <Story
        image='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/38818096_972232459625944_7848431320391745536_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=CreGs9hPoiIAX-BISbf&_nc_oc=AQmT68od2bH9RPN1eNucDGTUPeiPCzE9z3u7ESLCOidKQDVucE8H80SvbwMQNAFey5lQuPsX64FHUD8XnPpcRCSU&_nc_ht=scontent.fktm8-1.fna&oh=22ff37bc751bef717620aae91b8c933b&oe=5F89E0E7'
        Icon={AddCircleRoundedIcon}
        title="Create a story"
      />
      <Story
        image='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/106374474_4027012637372635_856870196191160153_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=uf-J4BdxJNgAX8GW1Cl&_nc_ht=scontent.fktm8-1.fna&oh=2e92322052314fee74c53e2b6a384ac0&oe=5F8BCDA4'
        profileSrc='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/118793955_4328483513892211_6598115521059585525_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ZSyphyQuR9wAX860Av-&_nc_ht=scontent.fktm8-1.fna&oh=03dcf98fe769c37b39d5f7463c0968da&oe=5F897DB3'
        title="Sandip Malla"
      />
       <Story
        image='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/119683816_660843747970691_4936714508005059265_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=24ve3Vg71LUAX_rWe-h&_nc_ht=scontent.fktm8-1.fna&oh=7ecbb81fb6e2e8d59af90c83a54dc075&oe=5F8B9906'
        profileSrc='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/104258993_3093894067361852_3846022178290580398_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=F6zGoyPVPFkAX-AaZ7o&_nc_ht=scontent.fktm8-1.fna&oh=d0bfb16a1837747d353ce837a818ef0a&oe=5F8BC0DF'
        title="Sanjog Kaji Piya"
      />
       <Story
        image='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/118771175_3237329666373974_2088277869627489877_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=m17W3k-P-vwAX9UxrDR&_nc_ht=scontent.fktm8-1.fna&oh=4c044a35fa7c899117a6412cc1f92afd&oe=5F8890EF'
        profileSrc='https://scontent.fktm8-1.fna.fbcdn.net/v/t31.0-8/21586699_1441047672668858_3551927510989758614_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=yJE0832bo50AX8gR3qG&_nc_ht=scontent.fktm8-1.fna&oh=760ea48b609d80ec6b6b22e126594df8&oe=5F88DE34'
        title="The Physique Workshop"
      />
       <Story
        image='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/117110980_10112177576166541_854203560519302351_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=_mOhCwhIhCwAX8_Ga87&_nc_ht=scontent.fktm8-1.fna&oh=d2b112088f7ebd720885e7b7d81b7bf8&oe=5F8C0E2C'
        profileSrc='https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/79515135_10111007623880301_5111576226921709568_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=-5noKNAAQCUAX892RKu&_nc_oc=AQlJiQcU7fAT-rfJ99NluVFKzrN-jyDSQb5fs-oPr_Jamsc532-dfW78A7egYaxhi799ttBJs0JAeQqXKeaeWd2h&_nc_ht=scontent.fktm8-1.fna&oh=4660b793d710a1a8af54e72ae61c9004&oe=5F888B07'
        title="Mark Zuckerberg"
      />
    </div>
  )
}

export default StoryReel
