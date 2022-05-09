package com.tunesio.tunesio.controllers;

import com.tunesio.tunesio.dao.SongDAO;
import com.tunesio.tunesio.entities.Song;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/songs")
public class SongController {

    private final SongDAO songDAO;

    public SongController(SongDAO songDAO) {
        this.songDAO = songDAO;
    }

    @GetMapping
    public List<Song> getSongs() {
        return songDAO.findAll();
    }

    @GetMapping(value = "/{id}")
    public Object getSongById(@PathVariable("id") UUID id) {
        Optional<Song> song = songDAO.findById(id);

        if (song.isPresent()) {
            return song.get();
        }

        HashMap<String, Object> response = new HashMap<>();
        response.put("message", "Invalid song");
        return response;
    }

    @GetMapping(value = "/search")
    public Object getSongsFromSearch(@RequestParam String query) {

        if (songDAO.findAllByTitleIgnoreCaseContaining(query).isEmpty() && songDAO.findAllByNameIgnoreCaseContaining(query).isEmpty() ) {
            HashMap<String, Object> response = new HashMap<>();
            response.put("message", String.format("No results found for %s.", query));
            return response;
        }

        if (songDAO.findAllByTitleIgnoreCaseContaining(query).isEmpty()) {
            return songDAO.findAllByNameIgnoreCaseContaining(query);
        } else {
            return songDAO.findAllByTitleIgnoreCaseContaining(query);
        }
    }

    @PostMapping
    public Song addSong(@RequestBody Song song) {
        return songDAO.save(song);
    }

    @PutMapping(value = "/{id}")
    public Song updateSong(@RequestBody Song newSong) {
        Song song = songDAO.getById(newSong.getId());

        song = newSong;

        return songDAO.save(song);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteSong(@PathVariable("id") UUID id) {
        songDAO.deleteById(id);
    }
}