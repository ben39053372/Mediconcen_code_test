insert into
  user (
    userid,
    email,
    password,
    clinic_name,
    phone_number,
    address
  )
values
  (
    UUID_TO_BIN(UUID()),
    ?,
    ?,
    ?,
    ?,
    ?
  )