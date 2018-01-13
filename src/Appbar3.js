import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {blue400,grey50,grey700,indigo900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  title: {
    backgroundColor:grey50,
    fontWeight:'bold',
    marginTop:1,
    height:50
  },
  iconp:
  {
    color:grey700,
    textTransform:'initial',
    fontWeight:'bold'
  }
};
const FlatButtonExampleSimple = () => (
  <div >

    <FlatButton label="Top" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB" />
    <FlatButton label="Latest" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB" />
    <FlatButton label="People" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB" />
    <FlatButton label="Photos" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB" />
    <FlatButton label="videos" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB" />
    <FlatButton label="News" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB" />
    <FlatButton label="Broadcasts" primary={true} labelStyle={styles.iconp}   hoverColor="#BBDEFB"/>
  </div>
);

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Appbar3 = () => (
  <AppBar style={styles.title}
iconElementLeft={<FlatButtonExampleSimple/> }
title={"aadhar"}

  />
);

export default Appbar3;
