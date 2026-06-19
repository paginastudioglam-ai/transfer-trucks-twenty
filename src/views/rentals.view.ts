import { defineView, ViewType } from 'twenty-sdk/define';
import { RENTAL_UNIVERSAL_IDENTIFIER } from 'src/objects/rental.object';

export const RENTALS_VIEW_UNIVERSAL_IDENTIFIER = 'a2e06193-a222-48d5-8e5c-7fe3e6d33b9e';

export default defineView({
  universalIdentifier: RENTALS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Rentals',
  objectUniversalIdentifier: RENTAL_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconFileText',
  position: 2,
  fields: [
    { universalIdentifier: '5e8733b6-63fe-4525-a531-f5b1db0c2a9e', fieldMetadataUniversalIdentifier: 'a7c6336a-95e8-4ff2-bfaa-bfb99a94c8df', position: 0, isVisible: true, size: 140 },
    { universalIdentifier: '74f1a05d-b16b-40e8-b28a-1ce263c52ae6', fieldMetadataUniversalIdentifier: '4f7e5a66-c697-46fb-9e5b-3f43cf445002', position: 1, isVisible: true, size: 100 },
    { universalIdentifier: '1f5fda31-cda6-4814-9c9f-c04abc2140bb', fieldMetadataUniversalIdentifier: '012c4785-1aac-4245-ba2b-d923db6c1bab', position: 2, isVisible: true, size: 100 },
    { universalIdentifier: '89ad64e3-894f-4845-a2b3-1ee365ae6021', fieldMetadataUniversalIdentifier: 'b06435ad-96d0-44ed-bb7f-2528fa923022', position: 3, isVisible: true, size: 100 },
    { universalIdentifier: '20aad945-72ae-426f-a191-052aa158e7b7', fieldMetadataUniversalIdentifier: '4dae2afd-b9b5-4a1e-bcb6-217b130e318e', position: 4, isVisible: true, size: 100 },
  ],
});
