export enum NavigationConstants {
  HomeScreen = 'HomeScreen',
  OtherScreen = 'OtherScreen',
  ComponentsScreen = 'ComponentsScreen'
}

export type DrawerRoutes = {
  [NavigationConstants.HomeScreen]: undefined;
  [NavigationConstants.OtherScreen]: undefined;
  [NavigationConstants.ComponentsScreen]: undefined;
}