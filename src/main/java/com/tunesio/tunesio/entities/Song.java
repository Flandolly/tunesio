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
@Table(name = "songs")
@AllArgsConstructor
@NoArgsConstructor
public class Song implements Serializable {
    @Id
    @GeneratedValue(generator = "UUID", strategy = GenerationType.AUTO)
    @GenericGenerator(name="id", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column
    private String name;
    @Column(length = 3000)
    private String description;
    @Column
    private String source;
    @Column
    private String audio;
    @Column
    private String image;
    @Column
    private String title;
}
