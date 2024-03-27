package com.activiterecette.activiterecette.dto;

import com.activiterecette.activiterecette.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email ;
    private String name ;
    private UserRole userRole;

}
