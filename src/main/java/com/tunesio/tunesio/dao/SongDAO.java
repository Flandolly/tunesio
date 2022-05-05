package com.tunesio.tunesio.dao;

import com.tunesio.tunesio.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface SongDAO extends JpaRepository<Song, UUID> {
    List<Song> findAllByTitleIgnoreCaseContaining(@Param("title") String title);
    List<Song> findAllByNameIgnoreCaseContaining(@Param("name") String name);
}
