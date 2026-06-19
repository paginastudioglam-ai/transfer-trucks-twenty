import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { RENTAL_UNIVERSAL_IDENTIFIER } from 'src/objects/rental.object';

export default defineNavigationMenuItem({
  universalIdentifier: 'd5e81ec3-f202-4bd6-abe3-e8f7adc8fc97',
  position: 2,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: RENTAL_UNIVERSAL_IDENTIFIER,
});
