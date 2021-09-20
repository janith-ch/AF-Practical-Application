package com.af.vehicle.repository;

import com.af.vehicle.modle.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends MongoRepository<Vehicle ,String > {

    @Query("{'category.id':{$in:?0}}")
    List<Vehicle> findByStatus(String[] status);

}
