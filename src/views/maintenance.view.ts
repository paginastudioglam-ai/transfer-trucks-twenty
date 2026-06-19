import { defineView, ViewType } from 'twenty-sdk/define';
import { MAINTENANCE_UNIVERSAL_IDENTIFIER } from 'src/objects/maintenance.object';

export const MAINTENANCE_VIEW_UNIVERSAL_IDENTIFIER = '86172add-2414-4a66-96d9-d4627d1928ef';

export default defineView({
  universalIdentifier: MAINTENANCE_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Maintenance',
  objectUniversalIdentifier: MAINTENANCE_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconWrench',
  position: 4,
  fields: [
    { universalIdentifier: 'd09a46c1-9d04-4380-a6a5-6897e321dff4', fieldMetadataUniversalIdentifier: 'ac497ec3-5845-4192-be85-723d95fef50b', position: 0, isVisible: true, size: 100 },
    { universalIdentifier: 'cc2f3dce-9f8f-47b2-b894-9a20a8842bc3', fieldMetadataUniversalIdentifier: 'fd7dd49d-f249-4fed-90f3-8035485a61ec', position: 1, isVisible: true, size: 120 },
    { universalIdentifier: 'ffc9a19b-9081-4059-b61f-5b75fadadbda', fieldMetadataUniversalIdentifier: '32cc8864-78f3-4beb-8f6e-4da9e9cfd5f4', position: 2, isVisible: true, size: 80 },
    { universalIdentifier: 'a8ac9378-863b-404d-a028-8df36c1de657', fieldMetadataUniversalIdentifier: '8cd1c4ee-d9b3-466b-ad04-996d5104d14b', position: 3, isVisible: true, size: 120 },
    { universalIdentifier: 'd23e1402-a3ce-4380-8e5d-5bcaccbe581d', fieldMetadataUniversalIdentifier: '4784aab0-cea3-4816-afa1-52ec7b839529', position: 4, isVisible: true, size: 100 },
  ],
});
