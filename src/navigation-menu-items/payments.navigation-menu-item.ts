import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { PAYMENT_UNIVERSAL_IDENTIFIER } from 'src/objects/payment.object';

export default defineNavigationMenuItem({
  universalIdentifier: 'bd2441a2-21bf-4399-ae6a-1b0c7f5e3e2b',
  position: 3,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: PAYMENT_UNIVERSAL_IDENTIFIER,
});
