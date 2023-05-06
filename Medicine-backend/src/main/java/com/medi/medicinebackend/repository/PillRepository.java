package com.medi.medicinebackend.repository;

import com.medi.medicinebackend.model.Pill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PillRepository extends JpaRepository<Pill,Long> {
}
