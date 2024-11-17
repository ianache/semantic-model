# semantic-model
Modelo Semantico

## Fact Table

```sql
create table analytic.fact_horasreportadas(
  note_id int primary key,
  project_id int, 
  milestone_id int, 
  regdate timestamp, 
  reporter varchar(20), 
  hours numeric, 
  issue_id int);
```

## Dimensions

```sql
create table analytic.dim_people(
  username varchar(20) primary key, 
  fullname varchar(60),
  role varchar(20), 
  salary decimal(10,2)
);
``` 
