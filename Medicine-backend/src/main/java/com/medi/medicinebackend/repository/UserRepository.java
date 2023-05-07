package com.medi.medicinebackend.repository;

import com.medi.medicinebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
