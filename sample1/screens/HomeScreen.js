import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import * as Animatable from 'react-native-animatable';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/social-story/sedation/ccmcLogo2017.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Animatable.Text animation="flipInY" easing="ease-in" number="1500" style={styles.mainWelcomeText}>
              Welcome to Social Story!
            </Animatable.Text>
            {this._welcomeScreen()}
          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }

  _welcomeScreen() {
      const ccmcLink = (
        <Text onPress={this._pingCCMCPress} style={styles.helpLinkText}>
          www.connecticutchildrens.org
        </Text>
      );

      const coreybyrumLink = (
        <Text onPress={this._pingCoreyByrumPress} style={styles.helpLinkText}>
          coreybyrum.com
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Visit our homepage at {ccmcLink}{"\n"}
          For developer information, visit {coreybyrumLink}
        </Text>
      );
  }

  _pingCCMCPress = () => {
    Linking.openURL(
      'https://www.connecticutchildrens.org/'
    );
  };

  _pingCoreyByrumPress = () => {
    Linking.openURL(
      'http://coreybyrum.com'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 11,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: -5,
    marginLeft: -10
  },
  welcomeImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 0,
    marginBottom: 25
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  mainWelcomeText: {
    fontFamily: 'Futura',
    fontSize: 31,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 85,
    paddingBottom: 4
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 5,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
