package be.mathiasbosman.cv.api;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity @Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


  @Override
  protected void configure(
      HttpSecurity http) throws Exception {
    http.csrf().disable()
        .authorizeRequests()
        .antMatchers("/rest/public/*").permitAll()
        .antMatchers("/admin/*", "/rest/*").authenticated()
        .anyRequest().permitAll()
        .and()
        .oauth2Login();
  }
}
