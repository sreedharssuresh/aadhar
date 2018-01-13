import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {blue500,grey300} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const style = {
  allign:
  {
height:400,
paddingTop:20,
marginTop:30,
marginLeft:20,
width:300 ,
  },
colorp:
{
  color:blue500,
  fontWeight:'bold',
  margin:20,
  fontSize:25
},
boldp:
{
  //color:grey500,
  fontWeight:'bold',
  fontSize:30
},
  paddingp:
  {
  height: 50,
  width: 300,
  margin: 20,
},
paper2p:
{
  height: 200,
  width: 300,
  margin: 20,
},
paper3p:
{
  height: 300,
  width: 300,
  margin: 20,
},
textp:
{

  display:'inline-block',
  textTransform:'initial',
},
tweet:
{
  marginTop:5,
  width: 100,
     height: 40,
     borderRadius:100
},
mediumIcon: {
    width: 35,
    height: 28,
    color:blue500,
   },
};
const FlatButtonExampleSimple = () => (
  <div style={{fontWeight:'bold'}}>
    <FlatButton label="Refresh" primary={true} labelStyle={{display:'inline-block',textTransform:'initial'}} />

  </div>
);
const FlatButtonExampleSimple1 = () => (
  <div style={{fontWeight:'bold'}}>
    <FlatButton label="Follow" primary={true} labelStyle={{display:'inline-block',textTransform:'initial'}} />

  </div>
);


const PaperExampleRounded = () => (
  <div>

    <Paper style={style.paddingp} zDepth={3} rounded={false} >
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:50,marginLeft:70}}>
    Search Filters
    </div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:20}}>
    <FlatButtonExampleSimple />
    </div>
    </Paper>

      <Paper style={style.paper2p} zDepth={3} rounded={false} >
    <div style={{textTransform:'initial',textAlign:'center',fontWeight:'bold',textSize:80,marginTop:10}}>
    Related search
    </div>
    <div style={{color:blue500,fontWeight:'bold',textSize:30,marginLeft:20,marginTop:30}}>
    #pvsindhu
    </div>
    <div style={{color:blue500,fontWeight:'bold',textSize:30,marginLeft:20,marginTop:20}}>
    #sunburn
    </div>
    <div style={{color:blue500,fontWeight:'bold',textSize:40,marginLeft:20,marginTop:20}}>
    #elclassico
    </div>
    <div style={{color:blue500,fontWeight:'bold',textSize:30,marginLeft:20,marginTop:20}}>
    #jimikkikammal
    </div>
    </Paper>

<Paper style={style.paper3p} zDepth={3} rounded={false} >
    <div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:50,marginLeft:70}}>
    Who to Follow
    </div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:20}}>
    <FlatButtonExampleSimple />
    </div>
    </div>
  <div>
      <div style={ {textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:20}}>
  <Avatar src="https://d1u4oo4rb13yy8.cloudfront.net/article/67684-hgijwetyay-1504671564.jpg" />    NanOrator
      </div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:60,backgroundColor:grey300,borderRadius:100}}>
    <FlatButtonExampleSimple1 label="Follow" />
    </div>
  </div>
  <div>
      <div style={ {textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:20}}>
  <Avatar src="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg" />    Narendra Modi
      </div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:27,backgroundColor:grey300,borderRadius:100}}>
    <FlatButtonExampleSimple1 label="Follow" />
    </div>
  </div>
  <div>
      <div style={ {textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:20}}>
  <Avatar src="https://media.indiatimes.in/media/content/2013/Dec/nandan_nilekani_1387083938_540x540.jpg" />    Nandan Nilekani
      </div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:12,backgroundColor:grey300,borderRadius:100}}>
    <FlatButtonExampleSimple1 label="Follow" />
    </div>
  </div>
  <div>
      <div style={ {textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:20}}>
  <Avatar src="http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/05/09/Pictures/_ae623744-34ab-11e7-9993-2f2d999294f7.jpg" />    Sasi Tharoor
      </div>
    <div style={{textTransform:'initial',display:'inline-block',fontWeight:'bold',textSize:30,marginLeft:35,backgroundColor:grey300,borderRadius:100}}>
    <FlatButtonExampleSimple1 label="Follow" />
    </div>
  </div>
</Paper>
<Paper style={style.allign} zDepth={4} >
    <div style={style.boldp}>
    Trends For you</div>
    <div  style={style.colorp}>
    #ElClasico
    </div>
    <div  style={style.colorp}>
    #Namo
    </div>
    <div  style={style.colorp}>
    #Election
    </div>
    <div  style={style.colorp}>
    #Iot
    </div>
    <div  style={style.colorp}>
    #MohammedRafi
    </div>
    <div  style={style.colorp}>
    #KeralaOkhi
    </div>
  </Paper>

  </div>
);

export default PaperExampleRounded;
