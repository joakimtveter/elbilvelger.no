import {CollectionConfig} from "payload";


export const Brands : CollectionConfig = {
  slug: 'brands',
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
      name:'company',
      type: 'relationship',
      relationTo: 'companies'
    },
    {
      name:'country',
      type: 'relationship',
      relationTo: 'countries'
    }


  ],

}
