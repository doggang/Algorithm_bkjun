-- 코드를 입력하세요
SELECT MCDP_CD as 진료과코드, count(*) as "5월예약건수" from appointment
where to_char(apnt_ymd,'MM') = '05'
group by MCDP_CD
order by 2,1 ;


