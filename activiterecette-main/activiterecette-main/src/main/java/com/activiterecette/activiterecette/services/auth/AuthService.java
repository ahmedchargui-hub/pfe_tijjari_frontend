package com.activiterecette.activiterecette.services.auth;

import com.activiterecette.activiterecette.dto.SignupRequest;
import com.activiterecette.activiterecette.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);
    boolean hasUserWithEmail(String email);
}
