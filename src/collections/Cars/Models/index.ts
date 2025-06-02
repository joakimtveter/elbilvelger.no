import {CollectionConfig} from "payload";

export const Models : CollectionConfig = {
  slug: 'models',
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
      name:'brand',
      type: 'relationship',
      relationTo: 'brands',
      required: true
    },
    {
      name:'body',
      type: 'select',
      options: [
        {
          label: 'Sendan',
          value: 'sedan',
        },
        {
          label: 'Stasjonsvogn',
          value: 'stasjonsvogn',
        },
        {
          label: 'SUV',
          value: 'suv',
        },
        {
          label: 'Pickup',
          value: 'pickup',
        },
        {
          label: 'Varebil',
          value: 'varebil',
        },
        {
          label: 'Cabriolet',
          value: 'cabriolet',
        },
        {
          label: 'Crossover',
          value: 'crossover',
        },
        {
          label: 'Flerbruksbil',
          value: 'flerbruksbil',
        },
      ]
    },
    {
      label: 'Startpris',
      type: "group",
      name: 'starting-price',
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Startpris',
              name: 'price',
              type: 'number',
              // required: true,
            },
            {
              label: 'Pris oppdatert',
              name: 'updated',
              type: 'date',
              // required: true,
            },
          ]
        },
      ]
    },
    {
      label: 'Dimmensjoner',
      type: 'group',
      name: 'dimensions',
      fields: [
        {
          name: 'length',
          type: 'number',
        },
        {
          name: 'width',
          type: 'number',
        },
        {
          name: 'height',
          type: 'number',
        },
        {
          name: 'wheelbase',
          type: 'number',
        },
      ]
    },
    {
      name:'variants',
      type: 'relationship',
      relationTo: "variants",
      hasMany:true,
    }
  ],

}
