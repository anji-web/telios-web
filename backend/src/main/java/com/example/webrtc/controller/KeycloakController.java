package com.example.webrtc.controller;

import com.example.webrtc.entity.UserCredentials;
import com.example.webrtc.entity.UserRegister;
import com.example.webrtc.repository.UserRegisterRepo;
import com.example.webrtc.service.KeycloakService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/keycloak-api")
@CrossOrigin
public class KeycloakController {

    private static final Logger logger = LoggerFactory.getLogger(KeycloakController.class);

    @Autowired
    private KeycloakService keycloakService;

    @Autowired
    private UserRegisterRepo userRegisterRepo;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody UserRegister userRegister){
        try {
            UserRegister newUser = userRegisterRepo.save(userRegister);
            keycloakService.createUserResource(userRegister);
            return new ResponseEntity<UserRegister>(newUser,HttpStatus.CREATED);
        }catch (Exception e){
            logger.error("User cannot created " + e.getMessage());
            return new ResponseEntity<UserRegister>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/token")
    public ResponseEntity<?> getTokenUsingCredentials(@RequestBody UserCredentials userCredentials) throws Exception{
        String response = null;
        try {
            response = keycloakService.getToken(userCredentials);


        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);

        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
