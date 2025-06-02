import {CollectionConfig} from "payload";

export const Variants : CollectionConfig = {
  slug: 'variants',
  admin:{
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    // {
    //   name:'model',
    //   type: 'relationship',
    //   relationTo: 'models'
    // },
    {
      label: 'Rekkevidde',
      name: 'range',
      type: 'number',
      required: true,
      admin: {
        description: 'Km WLTP'
      }
    },
    {
      label: 'Batterikapasitet - Brutto',
      name: 'batteryCapacity',
      type: 'number',
      required: true,
      admin: {
        description: 'kWh'
      }
    },
    {
      label: 'Batterikapasitet - Netto',
      name: 'usableBatteryCapacity',
      type: 'number',
      required: true,
      admin: {
        description: 'kWh'
      }
    },


  ],

}
