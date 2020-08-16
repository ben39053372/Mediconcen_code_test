

INSERT INTO
  `clinic`.`consultations` (
    `record_id`,
    `clinic_name`,
    `doctor_name`,
    `patient_name`,
    `diagnosis`,
    `medication`,
    `consultation_fee`,
    `datetime`,
    `followup_consultation`
  )
VALUES
  (
    UUID_TO_BIN(UUID()),
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    if(? is null, null, UUID_TO_BIN(?))
  );