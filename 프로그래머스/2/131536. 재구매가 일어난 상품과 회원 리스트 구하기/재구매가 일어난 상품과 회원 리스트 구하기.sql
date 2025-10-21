-- 코드를 입력하세요
select user_id, product_id from online_sale
group by user_id, product_id
having count(*)>1
order by 1 asc, 2 desc;