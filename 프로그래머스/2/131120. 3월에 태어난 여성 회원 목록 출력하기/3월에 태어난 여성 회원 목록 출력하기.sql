select member_id, member_name, gender, to_char(date_of_birth,'YYYY-MM-DD') from member_profile
where TLNO is not null and
to_char(date_of_birth,'MM')='03'
and gender='W'
order by 1 asc;