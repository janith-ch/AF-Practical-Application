package com.af.vehicle.repository;

import com.af.vehicle.modle.Category;
import com.af.vehicle.modle.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends MongoRepository<Category,String > {

}
