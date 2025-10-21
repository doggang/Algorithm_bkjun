-- 코드를 입력하세요
SELECT dr_name, dr_id, mcdp_cd, to_char(hire_ymd,'yyyy-mm-dd') from doctor
where mcdp_cd in ('CS','GS')
order by 4 desc, 1;