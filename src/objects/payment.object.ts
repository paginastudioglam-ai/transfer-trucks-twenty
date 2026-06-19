import { defineObject, FieldType } from 'twenty-sdk/define';

export const PAYMENT_UNIVERSAL_IDENTIFIER = '2af7e7e8-f165-47fd-977b-dabd19a9f30f';

export default defineObject({
  universalIdentifier: PAYMENT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'payment',
  namePlural: 'payments',
  labelSingular: 'Payment',
  labelPlural: 'Payments',
  icon: 'IconCash',
  fields: [
    {
      universalIdentifier: '85247978-550e-4271-bdec-95d77b43e6a0',
      name: 'rentalId',
      type: FieldType.TEXT,
      label: 'Rental ID',
      icon: 'IconFileText',
      isNullable: true,
    },
    {
      universalIdentifier: 'ea1d02c0-f173-4afb-a90e-f94fac213380',
      name: 'weekNumber',
      type: FieldType.NUMBER,
      label: 'Week Number',
      icon: 'IconCalendar',
    },
    {
      universalIdentifier: 'b84f2819-a0f4-4118-a5c4-8350744a6c1d',
      name: 'amount',
      type: FieldType.CURRENCY,
      label: 'Amount',
      icon: 'IconMoneybag',
    },
    {
      universalIdentifier: '06e764e6-cadd-4b7e-a7b0-2902b5aaeac5',
      name: 'dueDate',
      type: FieldType.DATE_TIME,
      label: 'Due Date',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: '18afe680-88da-4bc6-bc8d-fcfce378c72c',
      name: 'paidDate',
      type: FieldType.DATE_TIME,
      label: 'Paid Date',
      icon: 'IconCalendarCheck',
      isNullable: true,
    },
    {
      universalIdentifier: 'e3f1e0f1-3b4b-4b9b-aba9-2240a9a0db55',
      name: 'status',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconStatusChange',
      options: [
        { value: 'PENDING', label: 'Pending', position: 0, color: 'yellow' },
        { value: 'PAID', label: 'Paid', position: 1, color: 'green' },
        { value: 'LATE', label: 'Late', position: 2, color: 'orange' },
        { value: 'DEFAULTED', label: 'Defaulted', position: 3, color: 'red' },
      ],
    },
    {
      universalIdentifier: 'c981a833-2e89-4118-9986-d2f81dc6f715',
      name: 'method',
      type: FieldType.SELECT,
      label: 'Method',
      icon: 'IconCashRegister',
      isNullable: true,
      options: [
        { value: 'CASH', label: 'Cash', position: 0, color: 'green' },
        { value: 'ZELLE', label: 'Zelle', position: 1, color: 'blue' },
        { value: 'ACH', label: 'Transfer', position: 2, color: 'purple' },
        { value: 'CARD', label: 'Card', position: 3, color: 'orange' },
      ],
    },
    {
      universalIdentifier: 'f8636cdc-05c7-4e41-844c-e382c1c54c33',
      name: 'notes',
      type: FieldType.TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      isNullable: true,
    },
  ],
});
