package com.tunesio.tunesio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SongController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}