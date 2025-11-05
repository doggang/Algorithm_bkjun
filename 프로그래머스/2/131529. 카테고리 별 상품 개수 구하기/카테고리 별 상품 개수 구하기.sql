select substr(product_code,0,2) as CATEGORY, count(*) from product
group by substr(product_code,0,2)
order by CATEGORY asc;
