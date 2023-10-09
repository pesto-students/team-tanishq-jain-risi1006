import React from 'react';
import Navbar from '../Navbar';
import Footer from './component/footer';
import ProfileCard from './component/profileCard';
import { useNavigate} from 'react-router';
const Assignment4 = () => {
    const navigation = useNavigate();
    return (
        <div>
            <Navbar onHomeButtonClick={()=>{navigation('/')}} />
            <div style={{margin:10}}>
               
            {/* <h1>This is Assignment 4</h1>
            <p>It's a portfolio page where we have homepage which consist of user into, projects, and profile page</p>
            <p>We have contact, skill and product page</p> */}
            <ProfileCard 
                avatar={'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg'}
                name={'Ritesh Singh'}
                place={'Banaras'}
                photoCount={123}
                followers={2}
                followings={200}
                about={['Software Engineer', 'Quick Learner', 'Good Listner']}
                photos={['https://cdn.vox-cdn.com/thumbor/MbYxeyxG82sFlibdnv9Br1aCLg8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/24395697/bkq6gtrpcnw43vsm5zm62q3z.png','https://gray-kolo-prod.cdn.arcpublishing.com/resizer/TE7IhQt_Q825GVgDDtkXGb75mkw=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/W5DRRSQN4RETPH7TKOZRHBHCRA.jpg','https://static.euronews.com/articles/stories/07/35/63/70/1440x810_cmsv2_52be993f-0568-57fd-92d9-8b08cfbfadfa-7356370.jpg','https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0OTMxNTc0Njc1NzQzOTA2/avatar-3-evil-navi-james-cameron.jpg']}
            />
            <Footer />
            </div>
        </div>
    )
}

export default Assignment4;