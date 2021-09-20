package com.af.vehicle.service;

import com.af.vehicle.modle.Vehicle;
import com.af.vehicle.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService implements VehicleImp{

    @Autowired
    VehicleRepository vehicleRepository;
    @Override
    public Vehicle createVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
        return vehicle;
    }

    @Override
    public List<Vehicle> getAllVehicle() {
       return vehicleRepository.findAll();
    }

    @Override
    public List <Vehicle> findByStatus(String[] status) {
        return vehicleRepository.findByStatus(status);
    }
}
