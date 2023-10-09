import {ShareSocial} from 'react-share-social' 
 
export default function SocialShare() {
  return <ShareSocial 
     url ="url_to_share.com"
     socialTypes={['facebook','twitter','reddit','linkedin']}
   />
}