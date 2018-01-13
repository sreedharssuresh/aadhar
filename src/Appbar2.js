import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {blue400,grey50} from 'material-ui/styles/colors';
const styles = {
  title: {
    backgroundColor:blue400,
    fontWeight:'bold',
    fontSize:50,
    marginTop:2
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Appbar2 = () => (
  <AppBar style={styles.title}
iconElementLeft={<IconButton  tooltip="Font Icon"/> }
title={"aadhar"}

  />
);

export default Appbar2;
