export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [

      { name: 'customerId',
        type: 'number',
        title: 'Customer ID' 
      },
      
      { name: 'name',
        type: 'string',
        title: 'Name' 
      },  

      { name: 'email', 
        type: 'string', 
        title: 'Email' 
      },
      { name: 'address', 
        type: 'string', 
        title: 'Address' 
      },

      { name: 'phoneNo', 
        type: 'string', 
        title: 'Phone Number' 
      },
      { name: 'order', 
        type: 'array', 
        of: [{ type: 'reference', 
            to: [{ type: 'order' }] }], 
        title: 'Orders' }
    ]
  };

