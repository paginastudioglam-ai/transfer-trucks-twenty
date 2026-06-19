import { defineView, ViewType } from 'twenty-sdk/define';
import { DRIVER_UNIVERSAL_IDENTIFIER } from 'src/objects/driver.object';

export const DRIVERS_VIEW_UNIVERSAL_IDENTIFIER = '7e1e42cb-eb09-4e75-b7fd-3d75de331eab';

export default defineView({
  universalIdentifier: DRIVERS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Drivers',
  objectUniversalIdentifier: DRIVER_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUser',
  position: 1,
  fields: [
    { universalIdentifier: '146afdf6-4bc9-4dcc-90fd-7fef5a48bfe9', fieldMetadataUniversalIdentifier: 'fd0f1ade-3e70-41e1-9a8e-4e7cc2bbbbf7', position: 0, isVisible: true, size: 180 },
    { universalIdentifier: 'dfcb8eef-1867-4c35-a8a5-4f48ff87172e', fieldMetadataUniversalIdentifier: '20121c7e-1e73-434c-8605-ec7a0d19d75a', position: 1, isVisible: true, size: 140 },
    { universalIdentifier: '550af3af-ec2e-4f01-9986-36f38ce905ba', fieldMetadataUniversalIdentifier: '152dab63-f282-409b-ad64-375ab0f9c4c3', position: 2, isVisible: true, size: 160 },
    { universalIdentifier: '19eb443e-287a-4229-9326-f69c4558fe94', fieldMetadataUniversalIdentifier: '3124393d-2bb2-4e79-9a46-17645822e0d2', position: 3, isVisible: true, size: 140 },
    { universalIdentifier: '999eaf8c-acea-4edc-bb24-655c7de086b5', fieldMetadataUniversalIdentifier: '0a4b79ca-6dc6-480c-bcd6-af72065516cd', position: 4, isVisible: true, size: 100 },
    { universalIdentifier: '87a6e446-4201-489c-a98c-a529aeb85543', fieldMetadataUniversalIdentifier: '6acc6ff1-395d-4e01-b9e6-7ddb094d78df', position: 5, isVisible: true, size: 100 },
  ],
});
