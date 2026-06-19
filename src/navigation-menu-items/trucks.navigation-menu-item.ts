import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { TRUCK_UNIVERSAL_IDENTIFIER } from 'src/objects/truck.object';

export default defineNavigationMenuItem({
  universalIdentifier: '3167b45c-6892-4c16-8a15-5c9285635c43',
  position: 0,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: TRUCK_UNIVERSAL_IDENTIFIER,
});
