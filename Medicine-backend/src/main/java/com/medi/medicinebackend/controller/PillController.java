package com.medi.medicinebackend.controller;

import com.medi.medicinebackend.exception.PillNotFoundException;
import com.medi.medicinebackend.model.Pill;
import com.medi.medicinebackend.repository.PillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PillController {

    @Autowired
    private PillRepository pillRepository;

    @PostMapping("/pill")
    Pill newPill(@RequestBody Pill newPill) {
        return  pillRepository.save(newPill);
    }

    @GetMapping("/pills")
    List<Pill> getAllPill() {
        return pillRepository.findAll();
    }

    @GetMapping("/pill/{id}")
    Pill getPillById(@PathVariable Long id) {
        return  pillRepository.findById(id)
                .orElseThrow(()-> new PillNotFoundException(id));
    }

    @PutMapping("/pill/{id}")
    Pill updatePill(@RequestBody Pill newPill,@PathVariable Long id) {
        return pillRepository.findById(id)
                .map(pill -> {
                    pill.setName(newPill.getName());
                    pill.setCategory(newPill.getCategory());
                    pill.setDescription(newPill.getDescription());
                    return  pillRepository.save(pill);
                }).orElseThrow(()-> new PillNotFoundException(id));
    }

    @DeleteMapping("/pill/{id}")
    String deletePill(@PathVariable Long id) {
        if (!pillRepository.existsById(id)) {
            throw new PillNotFoundException(id);
        }
        pillRepository.deleteById(id);
        return "Pill with id " + id + " has been deleted success.";
    }
}
