select a.flavor from
FIRST_HALF a join ICECREAM_INFO b
on a.flavor = b.flavor
where a.total_order >3000 and b.ingredient_type='fruit_based'
order by total_order desc;