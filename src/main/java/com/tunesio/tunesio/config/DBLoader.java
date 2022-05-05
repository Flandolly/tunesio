package com.tunesio.tunesio.config;

import com.tunesio.tunesio.dao.SongDAO;
import com.tunesio.tunesio.entities.Song;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.UUID;

@Component
public class DBLoader implements CommandLineRunner {

    private final SongDAO songDAO;

    public DBLoader(SongDAO songDAO) {
        this.songDAO = songDAO;
    }

    private static String readUrl(String inputUrl) throws Exception {
        BufferedReader reader = null;
        try {
            URL url = new URL(inputUrl);
            reader = new BufferedReader(new InputStreamReader(url.openStream()));
            StringBuilder sb = new StringBuilder();
            int read;
            char[] chars = new char[1024];
            while ((read = reader.read(chars)) != -1) {
                sb.append(chars, 0, read);
            }
            return sb.toString();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                reader.close();
            }
        }
        return "";
    }

    @Override
    public void run(String... strings) throws Exception {
        JSONObject json = new JSONObject(readUrl("https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json"));
//        System.out.println(json.get("podcasts"));
        JSONArray results = json.getJSONArray("podcasts");

        for (int i = 0; i < results.length(); i++) {
            JSONObject podcast = results.getJSONObject(i);
            songDAO.save(new Song(UUID.randomUUID(),
                    podcast.getString("name"),
                    podcast.getString("description"),
                    podcast.getString("source"),
                    podcast.getString("audio"),
                    podcast.getString("image"),
                    podcast.getString("title")
                    )
            );
        }
    }
}
