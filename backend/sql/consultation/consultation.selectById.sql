SELECT
    BIN_TO_UUID(`consultations`.`record_id`) as 'ID',
    `consultations`.`clinic_name` as 'Clinic',
    `consultations`.`doctor_name` as 'Doctor',
    `consultations`.`patient_name` as 'Patient',
    `consultations`.`diagnosis` as 'Diagnosis',
    `consultations`.`medication` as 'Medication',
    `consultations`.`consultation_fee` as 'Consultation Fee',
    `consultations`.`datetime` as 'Date Time',
    BIN_TO_UUID(`consultations`.`followup_consultation`) as 'Followup Consultation ID'
FROM
    `clinic`.`consultations`
WHERE
    `consultations`.`record_id` = UUID_TO_BIN(?);