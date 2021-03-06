package com.example.webrtc.controller;

import com.example.webrtc.entity.UserRegister;
import com.example.webrtc.repository.UserRegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/data-api")
public class IndexController {
    @Autowired
    private UserRegisterRepo userRegisterRepo;

    @GetMapping("/list-user")
    public List<UserRegister> listUser(@RequestBody UserRegister userRegister){
        return userRegisterRepo.listDataUser(userRegister);
    }
}
