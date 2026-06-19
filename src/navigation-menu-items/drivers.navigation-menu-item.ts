import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { DRIVER_UNIVERSAL_IDENTIFIER } from 'src/objects/driver.object';

export default defineNavigationMenuItem({
  universalIdentifier: 'a1f74ac4-c8b5-4a2e-a81a-e1e80a63d9d1',
  position: 1,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: DRIVER_UNIVERSAL_IDENTIFIER,
});
