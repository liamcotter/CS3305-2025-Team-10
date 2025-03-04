/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | {
        pathname: Router.ExternalPathString,
        params?: Router.UnknownInputParams
      } | { pathname: `/../components/ButtonRoute`; params?: Router.UnknownInputParams; } | {
        pathname: `/screens/arrivals/[stopId]`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | {
        pathname: `${'/(tabs)'}` | `/`;
        params?: Router.UnknownInputParams;
      } | { pathname: `${'/(tabs)'}/map` | `/map`; params?: Router.UnknownInputParams; } | {
        pathname: `/config/Colors`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/math/caclulateDirection`; params?: Router.UnknownInputParams; } | {
        pathname: `/redux/busSlice`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/redux/favSlice`; params?: Router.UnknownInputParams; } | {
        pathname: `/redux/routeSlice`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/redux/stopSlice`; params?: Router.UnknownInputParams; } | {
        pathname: `/redux/store`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/screens/search`; params?: Router.UnknownInputParams; } | {
        pathname: `/screens/arrivals/[stopId]`,
        params: Router.UnknownInputParams & { stopId: string | number; }
      } | { pathname: `/screens/trip/[busId]`, params: Router.UnknownInputParams & { busId: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | {
        pathname: Router.ExternalPathString,
        params?: Router.UnknownOutputParams
      } | { pathname: `/../components/ButtonRoute`; params?: Router.UnknownOutputParams; } | {
        pathname: `/screens/arrivals/[stopId]`;
        params?: Router.UnknownOutputParams;
      } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | {
        pathname: `${'/(tabs)'}` | `/`;
        params?: Router.UnknownOutputParams;
      } | { pathname: `${'/(tabs)'}/map` | `/map`; params?: Router.UnknownOutputParams; } | {
        pathname: `/config/Colors`;
        params?: Router.UnknownOutputParams;
      } | { pathname: `/math/caclulateDirection`; params?: Router.UnknownOutputParams; } | {
        pathname: `/redux/busSlice`;
        params?: Router.UnknownOutputParams;
      } | { pathname: `/redux/favSlice`; params?: Router.UnknownOutputParams; } | {
        pathname: `/redux/routeSlice`;
        params?: Router.UnknownOutputParams;
      } | { pathname: `/redux/stopSlice`; params?: Router.UnknownOutputParams; } | {
        pathname: `/redux/store`;
        params?: Router.UnknownOutputParams;
      } | { pathname: `/screens/search`; params?: Router.UnknownOutputParams; } | {
        pathname: `/screens/arrivals/[stopId]`,
        params: Router.UnknownOutputParams & { stopId: string; }
      } | { pathname: `/screens/trip/[busId]`, params: Router.UnknownOutputParams & { busId: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/../components/ButtonRoute${`?${string}` | `#${string}` | ''}` | `/screens/arrivals/[stopId]${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/map${`?${string}` | `#${string}` | ''}` | `/map${`?${string}` | `#${string}` | ''}` | `/config/Colors${`?${string}` | `#${string}` | ''}` | `/math/caclulateDirection${`?${string}` | `#${string}` | ''}` | `/redux/busSlice${`?${string}` | `#${string}` | ''}` | `/redux/favSlice${`?${string}` | `#${string}` | ''}` | `/redux/routeSlice${`?${string}` | `#${string}` | ''}` | `/redux/stopSlice${`?${string}` | `#${string}` | ''}` | `/redux/store${`?${string}` | `#${string}` | ''}` | `/screens/search${`?${string}` | `#${string}` | ''}` | {
        pathname: Router.RelativePathString,
        params?: Router.UnknownInputParams
      } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | {
        pathname: `/../components/ButtonRoute`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/screens/arrivals/[stopId]`; params?: Router.UnknownInputParams; } | {
        pathname: `/_sitemap`;
        params?: Router.UnknownInputParams;
      } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | {
        pathname: `${'/(tabs)'}/map` | `/map`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/config/Colors`; params?: Router.UnknownInputParams; } | {
        pathname: `/math/caclulateDirection`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/redux/busSlice`; params?: Router.UnknownInputParams; } | {
        pathname: `/redux/favSlice`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/redux/routeSlice`; params?: Router.UnknownInputParams; } | {
        pathname: `/redux/stopSlice`;
        params?: Router.UnknownInputParams;
      } | { pathname: `/redux/store`; params?: Router.UnknownInputParams; } | {
        pathname: `/screens/search`;
        params?: Router.UnknownInputParams;
      } | `/screens/arrivals/${Router.SingleRoutePart<T>}` | `/screens/trip/${Router.SingleRoutePart<T>}` | {
        pathname: `/screens/arrivals/[stopId]`,
        params: Router.UnknownInputParams & { stopId: string | number; }
      } | { pathname: `/screens/trip/[busId]`, params: Router.UnknownInputParams & { busId: string | number; } };
    }
  }
}
