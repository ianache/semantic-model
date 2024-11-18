cube(`fact_horasreportadas`, {
  sql_table: `analytic.fact_horasreportadas`,
  
  data_source: `default`,
  
  joins: {
    dim_people: {
	    sql: `${dim_people}.username = ${CUBE}.reporter`,
	    relationship: `many_to_one`
    }    
  },
  
  dimensions: {
    note_id: {
      sql: `note_id`,
      type: `number`,
      primary_key: true
    },
    
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
    },
    hours: {
      type: `sum`,
      sql: `hours`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
