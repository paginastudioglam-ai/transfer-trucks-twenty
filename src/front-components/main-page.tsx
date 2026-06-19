import { defineFrontComponent } from 'twenty-sdk/define';
import {
  MAIN_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

const MainPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        gap: '16px',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#E4552A',
        }}
      >
        Transfer Trucks Fleet
      </span>
      <span
        style={{
          fontSize: '14px',
          color: '#888',
          lineHeight: '1.5',
        }}
      >
        Charlotte&apos;s reliable box truck leasing partner.
        <br />
        Manage your fleet, clients, rentals, payments, and maintenance.
      </span>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: MAIN_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: 'Transfer Trucks Fleet',
  description: 'Transfer Trucks Fleet Manager main page',
  component: MainPage,
});
