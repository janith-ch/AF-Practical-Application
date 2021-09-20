package com.af.vehicle.modle;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Vehicle {
    @Id
    private String id;
    private String code;
    private String model;
    private String type;
    private String name;
    private Category category;
}
