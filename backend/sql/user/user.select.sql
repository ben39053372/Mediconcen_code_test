select
  email,
  clinic_name,
  phone_number,
  address,
  create_time
from
  user
where
  email = ?
  and password = ?