cube(`dim_people`, {
  sql_table: `analytic.dim_people`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    username: {
      sql: `username`,
      type: `string`
    },
    
    fullname: {
      sql: `fullname`,
      type: `string`
    },
    
    role: {
      sql: `role`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
