cube(`fact_horasreportadas`, {
  sql_table: `analytic.fact_horasreportadas`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    reporter: {
      sql: `reporter`,
      type: `string`
    },
    
    regdate: {
      sql: `regdate`,
      type: `time`
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
