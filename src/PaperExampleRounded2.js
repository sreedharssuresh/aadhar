import React from 'react';
import Paper from 'material-ui/Paper';
import {blue400,grey600} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
const style = {
  paper1:
{
  height: 500,
  width: 650,
  marginLeft:350,
  marginTop:-1020,
  textAlign: 'center',
},
paperp:
  {
  height:400,
  width: 650,
  marginLeft:325,
  marginTop:-330,
  textAlign: 'center',

},
textp:
{
  marginTop:-40,
  marginRight:430,
  fontWeight:'bold',
  fontSize:20
},
textp1:
{
  marginTop:-20,
  marginRight:200,
  color:grey600,
},
};

const PaperExampleRounded2 = () => (
  <div>

     <Paper style={style.paper1} zDepth={4} rounded={false}>
     <div>
         <Avatar style={{marginLeft:-600}} src="https://www.oneindia.com/image/560x292x81/2017/11/16592061-aadhar-card-linking-how-to-generate-totp-for-maadhaar.jpg"/><div style={style.textp}>AadharIndia </div><div style={style.textp1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@india123 &nbsp;&nbsp;1d</div>
         <div style={{marginTop:30,
         marginRight:490}}>
         Aadhar for tigers:
         </div>
         <div>
         <img style={{width:645,height:400}} src="https://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg"alt="map"/>
         </div>

         </div>
         </Paper>

   </div>

);

export default PaperExampleRounded2;
