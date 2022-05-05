package com.tunesio.tunesio.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Song implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    @GenericGenerator(name="id", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    private String name;
    private String description;
    private String source;
    private String audio;
    private String image;
    private String title;
}
