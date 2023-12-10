import { Stack } from 'expo-router';
import * as ScreenSplash from 'expo-splash-screen';

ScreenSplash.preventAutoHideAsync();

const Layout = () => {
  // const [fontsLoaded] = useFonts({
  //   DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
  //   DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
  //   DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  // });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await ScreenSplash.hideAsync();
  //   }
  // }, [fontsLoaded]);
  // if (!fontsLoaded) return null;
  return <Stack />;
};

export default Layout;
