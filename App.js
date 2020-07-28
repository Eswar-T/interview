import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PostsList from './src/components/postsList'
import UserView from './src/components/userView'
import PostView from './src/components/postView'

const appStack = createStackNavigator(
  {
      PostsList:{
        screen : PostsList
      },
      UserView:{
        screen : UserView
      },
      PostView:{
        screen: PostView
      }
  },
  {
    defaultNavigationOptions:{
      headerShown:false
    },
    initialRouteName:'PostsList'
  },
);


export default createAppContainer(appStack);