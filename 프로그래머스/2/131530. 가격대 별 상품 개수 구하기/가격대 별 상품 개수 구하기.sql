-- 3
-- 4
-- 5
-- 6
-- -- 코드를 입력하세요
-- SELECT TRUNC(price/10000)*10000 AS price_group
-- , COUNT(*) AS products
-- FROM product
-- GROUP BY TRUNC(price/10000)
-- ORDER BY price_group ASC;

select trunc(price/10000)*10000 as PRICE_GROUP, count(*) as PRODUCTS from product
group by trunc(price/10000)*10000
order by 1 asc;


