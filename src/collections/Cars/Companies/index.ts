import {CollectionConfig} from "payload";

export const Companies : CollectionConfig = {
  slug: 'companies',
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
      name: 'shortName',
      type: 'text',
      required: true,
    },
  ],

}
