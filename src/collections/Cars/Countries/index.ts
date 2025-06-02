import {CollectionConfig} from "payload";
import {slugField} from "@/fields/slug";

export const Countries : CollectionConfig = {
  slug: 'countries',
  admin:{
    useAsTitle: 'name',
    description: 'Name of the countries of the countries.',
  },
  fields: [
    {
      label: 'Navn',
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      label:'Landskode',
      name: 'code',
      type: 'text',
      required: true,
      admin: {
        description: 'ISO 3166-kode'
      }
    },
  ],

}
