package com.medi.medicinebackend.exception;

public class PillNotFoundException extends RuntimeException{
    public PillNotFoundException(Long id){
        super("Could not found the pill with id " + id);
    }
}
