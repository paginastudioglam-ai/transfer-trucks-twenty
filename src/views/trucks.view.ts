import { defineView, ViewType } from 'twenty-sdk/define';
import { TRUCK_UNIVERSAL_IDENTIFIER } from 'src/objects/truck.object';

export const TRUCKS_VIEW_UNIVERSAL_IDENTIFIER = '3b9d53fc-12db-4aa7-b166-3e3c86311536';

export default defineView({
  universalIdentifier: TRUCKS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Trucks',
  objectUniversalIdentifier: TRUCK_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTruck',
  position: 0,
  fields: [
    { universalIdentifier: '95079ddc-b26d-4fcf-9ffe-48ad97f49bff', fieldMetadataUniversalIdentifier: '0ac1dd66-2fe2-45e0-96c7-95d69c5ff62b', position: 0, isVisible: true, size: 100 },
    { universalIdentifier: 'c020d627-cb24-4d95-a0c4-44f3f72f515b', fieldMetadataUniversalIdentifier: '54f284b6-1903-44d0-a5f9-261e0624537b', position: 1, isVisible: true, size: 80 },
    { universalIdentifier: '2411f136-79e8-4b85-898c-443a284966f8', fieldMetadataUniversalIdentifier: 'bee12483-b97b-491f-9187-04a4686768b4', position: 2, isVisible: true, size: 80 },
    { universalIdentifier: '6d359eed-7046-47e7-9fb2-72c031f8877f', fieldMetadataUniversalIdentifier: 'd8402155-fa66-4ca1-89d6-7aaaccc0aae1', position: 3, isVisible: true, size: 120 },
    { universalIdentifier: '7ae3e018-e312-4f2d-b940-ea1a149598f7', fieldMetadataUniversalIdentifier: '6b2d119e-ada3-480b-a348-9944e8883797', position: 4, isVisible: true, size: 100 },
    { universalIdentifier: '814cd37f-c3e1-4577-ba44-82019b57aae6', fieldMetadataUniversalIdentifier: '812ef546-3f30-4a76-aebf-e29af1e408b7', position: 5, isVisible: true, size: 80 },
  ],
});
