select book_id, to_char(published_date,'yyyy-mm-dd') from book
where to_char(published_date,'yyyy')=2021 and category='인문'
order by published_date asc;