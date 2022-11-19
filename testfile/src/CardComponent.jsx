import React from 'react';
import { Card } from 'antd';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const { Meta } = Card;
const CardComponent = () => (

  <div className='profileCards' style={{display:"flex",gap:"2rem"}}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://media-exp1.licdn.com/dms/image/C4D03AQEMjX0D43wc5w/profile-displayphoto-shrink_800_800/0/1655134098103?e=1674086400&v=beta&t=pXjqIpbI0Jpd95Pd4CCCkQ6bnlTuzVrMv4YEEE7irik" />}
  >
    <Meta title="Ketan Shetge" description="Trainee" />
     <a href="https://www.linkedin.com/in/ketan-shetge-03248a224/"><LinkedInIcon/></a> 
     <a href="https://github.com/ketans2141"><GitHubIcon/></a>
  </Card>
  
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://media-exp1.licdn.com/dms/image/D5603AQG0L1s3iI7v9A/profile-displayphoto-shrink_800_800/0/1666935597737?e=1674086400&v=beta&t=9HC6BwSN3-7SpHIHmnz4SoIDXPgahyR0sTBA-ruYehk" />}
  >
    <Meta title="B.D Kiran Kumar" description="Project Leader" />
    <a href="https://www.linkedin.com/in/bdkirankumar/"><LinkedInIcon/></a>
    <a href="https://github.com/Kiran2821996"><GitHubIcon/></a>
  </Card>
  
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://media-exp1.licdn.com/dms/image/C4D03AQG0KQblOnE1sw/profile-displayphoto-shrink_800_800/0/1655452966052?e=1674086400&v=beta&t=IuqeHQ_nEwl4R-DC4QrFzVrgAAutHnjyW-yf9ocPCIE" />}
  >
    <Meta title="Shivansh Rawat" description="Trainee" />
<div className="profileLinks">

</div>
    <a href="https://www.linkedin.com/in/shivansh-rawat-78aa421b5/"><LinkedInIcon/></a>
    <a href="https://github.com/Shivansh3218"><GitHubIcon/></a>

  </Card>
  
  </div>
)

export default CardComponent;
