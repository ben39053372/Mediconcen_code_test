CREATE TABLE `consultations` (
  `record_id` binary(16) NOT NULL,
  `clinic_name` binary(16) NOT NULL,
  `doctor_name` varchar(45) NOT NULL,
  `patient_name` varchar(45) NOT NULL,
  `diagnosis` varchar(255) DEFAULT NULL,
  `medication` varchar(255) DEFAULT NULL,
  `consultation_fee` varchar(255) DEFAULT NULL,
  `datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `followup_consultation` binary(16) DEFAULT NULL,
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
