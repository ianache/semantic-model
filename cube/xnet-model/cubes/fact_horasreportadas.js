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
      type: `time`,
      granularities: {
        sunday_week: { interval: `1 week`, offset: `-1 day` },
	fiscal_year: { title: `Federal Fiscal Year in EEUU`, interval: `1 year`, offset: `-3 months` },
	fiscal_quarter: { title: `Federal Fiscal quarter in EEUU`, interval: `1 quarter`, offset: `-3 months` }
      }
    },

    sunday_week: { sql: `${regdate.sunday_week}`, type: `time` },
    fiscal_year: { sql: `${regdate.fiscal_year}`, type: `time` },
    fiscal_quarter: { sql: `${regdate.fiscal_quarter}`, type: `time` },

    fiscal_quarter_label: {
      //sql: ` 
      //  'FY' || (EXTRACT(YEAR FROM {regdate.fiscal_year}) + 1) |
      //  '-Q' || EXTRACT(QUARTER FROM {regdate.fiscal_quarter} + INTERVAL '3 MONTHS')
      //`,
      sql: `'FY' || (EXTRACT(YEAR FROM ${regdate.fiscal_quarter}) + 1) || '-Q' || EXTRACT(QUARTER FROM ${regdate.fiscal_quarter})`, 
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    hours: {
      type: `sum`,
      sql: `hours`
    },
    cost: {
      type: `sum`,
      sql: `(dim_people.salary / 168) * hours`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
