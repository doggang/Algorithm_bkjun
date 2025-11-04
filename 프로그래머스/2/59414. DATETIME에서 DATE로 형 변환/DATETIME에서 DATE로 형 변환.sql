-- 코드를 입력하세요
SELECT animal_id, name, to_char(datetime, 'YYYY-MM-DD') as datetime from animal_ins
order by 1;