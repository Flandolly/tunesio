package com.tunesio.tunesio.dao;

import com.tunesio.tunesio.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SongDAO extends JpaRepository<Song, UUID> {

}
