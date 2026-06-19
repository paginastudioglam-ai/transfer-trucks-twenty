import { defineView, ViewType } from 'twenty-sdk/define';
import { PAYMENT_UNIVERSAL_IDENTIFIER } from 'src/objects/payment.object';

export const PAYMENTS_VIEW_UNIVERSAL_IDENTIFIER = 'cd6a2fe2-da2f-4ed4-a3ed-4aef7973a623';

export default defineView({
  universalIdentifier: PAYMENTS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Payments',
  objectUniversalIdentifier: PAYMENT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconCash',
  position: 3,
  fields: [
    { universalIdentifier: 'e161d242-cfb2-44d7-9d7e-aac03139b701', fieldMetadataUniversalIdentifier: 'ea1d02c0-f173-4afb-a90e-f94fac213380', position: 0, isVisible: true, size: 100 },
    { universalIdentifier: 'bd00297d-b7e4-4b9b-ac78-c9d5ffadb3e8', fieldMetadataUniversalIdentifier: 'b84f2819-a0f4-4118-a5c4-8350744a6c1d', position: 1, isVisible: true, size: 100 },
    { universalIdentifier: 'a76ea67d-7acc-4b79-8a48-689f6add25e3', fieldMetadataUniversalIdentifier: '06e764e6-cadd-4b7e-a7b0-2902b5aaeac5', position: 2, isVisible: true, size: 100 },
    { universalIdentifier: 'b815553a-bbbd-4300-b1ee-b0c12020f13f', fieldMetadataUniversalIdentifier: 'e3f1e0f1-3b4b-4b9b-aba9-2240a9a0db55', position: 3, isVisible: true, size: 100 },
    { universalIdentifier: '7e738546-654f-4e7b-9438-bd5d169b5e6f', fieldMetadataUniversalIdentifier: 'c981a833-2e89-4118-9986-d2f81dc6f715', position: 4, isVisible: true, size: 80 },
  ],
});
