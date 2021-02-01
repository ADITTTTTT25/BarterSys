import { createDrawerNavigator } from "react-navigation-drawer";
import  CustomSidebarMenu  from "./CustomSidebarMenu";
import { AppTabNavigator } from "./AppTabNavigator";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
  },
  { contentComponent: CustomSidebarMenu },
  { initialRouteName: "Home" }
);
