import * as React from 'react';
import Home from './src/components/Home';
import HomePage from './src/components/HomePage';
import Diagnosis from './src/components/Diagnosis';
import Login from './src/components/Login';
import Signup from "./src/components/Signup"
import Hysteria from "./src/components/Hysteria"
import Narcissim from "./src/components/Narcissim"
import Diseases2 from "./src/components/Diseases2"
import Obsessive_compulsive_disorder from "./src/components/Obsessive_compulsive_disorder"
import Schizophrenia from "./src/components/Schizophrenia"
import Lack_of_attention from "./src/components/Lack_of_attention"
import Board from './src/components/Board';
import Catogaries from './src/components/Catogaries';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Voice from "./src/components/Voice"
import SwitchControle from './src/components/SwitchControle';
import IntroSlider from './src/components/IntroSlider';
import All_catogary from './src/components/All_catogary';
import Autism_spectrum from "./src/components/Autism_spectrum"
// import Quiz from './src/components/Quiz';
import Exam from "./src/components/Exam"
const Auth = createStackNavigator({
  Login: Login,
  Signup: Signup
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {

    initialRouteName: Login,

  })
const IntroSlider_page = createStackNavigator({
  IntroSlider: IntroSlider,

},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {

    initialRouteName: IntroSlider,

  })








const HomePages = createStackNavigator(
  {
    // Quiz: Quiz,

    HomePage: HomePage,
    Home: Home,
    Diagnosis: Diagnosis,
    Hysteria: Hysteria,
    Schizophrenia: Schizophrenia,
    Obsessive_compulsive_disorder: Obsessive_compulsive_disorder,
    Diseases2: Diseases2,
    Narcissim: Narcissim,
    Lack_of_attention: Lack_of_attention,
    Board: Board,
    Catogaries: Catogaries,
    All_catogary: All_catogary,
    Voice: Voice,
    Exam: Exam,
    Autism_spectrum: Autism_spectrum
  }
  , {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    },
    // lazy: true,
  },
  {
    initialRouteName: HomePage
  }
)
const AppSwitch = createSwitchNavigator({
  SwitchControl: { screen: SwitchControle },
})
const All = createSwitchNavigator(
  {
    AppSwitch: AppSwitch,
    IntroSlider_page: IntroSlider_page,
    Auth: Auth,
    HomePages: HomePages,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
)
const App = createAppContainer(All)

export default App
// export default class App extends React.Component{
//   render(){
//     return(
//       <Home/>
//     )
//   }
// }
