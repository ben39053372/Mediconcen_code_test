SELECT
    BIN_TO_UUID(`consultations`.`record_id`) as record_id,
    `consultations`.`clinic_name`,
    `consultations`.`doctor_name`,
    `consultations`.`patient_name`,
    `consultations`.`datetime`
FROM
    `clinic`.`consultations`
WHERE
    `consultations`.`datetime` BETWEEN ? AND ?+ INTERVAL 1 DAY;