package com.af.vehicle.modle;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Category {
    @Id
    private String id;
    private String tripType;
    private String description;
    private String amount;
}
