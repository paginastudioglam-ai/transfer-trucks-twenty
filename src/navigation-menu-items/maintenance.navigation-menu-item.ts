import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { MAINTENANCE_UNIVERSAL_IDENTIFIER } from 'src/objects/maintenance.object';

export default defineNavigationMenuItem({
  universalIdentifier: 'c2a6b711-3bd8-4cf7-8255-2f3c8e5b4aa6',
  position: 4,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: MAINTENANCE_UNIVERSAL_IDENTIFIER,
});
