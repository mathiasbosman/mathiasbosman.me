package be.mathiasbosman.cv.config;

import be.mathiasbosman.cv.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import be.mathiasbosman.cv.oauth2.OAuth2AuthenticationFailureHandler;
import be.mathiasbosman.cv.oauth2.OAuth2AuthenticationSuccessHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
  private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;
  private final HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

  SecurityConfig(OAuth2AuthenticationSuccessHandler successHandler,
      OAuth2AuthenticationFailureHandler failureHandler,
      HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository) {
    this.oAuth2AuthenticationFailureHandler = failureHandler;
    this.oAuth2AuthenticationSuccessHandler = successHandler;
    this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable()
        .formLogin().disable()
        .httpBasic().disable()
        .authorizeRequests()
        .antMatchers("/**/*.{ico,png,gif,svg,jpg,js,html,css}").permitAll()
        .antMatchers("/", "/rest/public/**").permitAll()
        .antMatchers("/auth/**", "/oauth2/**").permitAll()
        .anyRequest().authenticated()
        .and()
        .oauth2Login()
        .authorizationEndpoint().baseUri("/oauth2/authorize")
        .authorizationRequestRepository(httpCookieOAuth2AuthorizationRequestRepository)
        .and()
        .redirectionEndpoint().baseUri("/#/oauth2/callback/*")
        .and()
        .successHandler(oAuth2AuthenticationSuccessHandler)
        .failureHandler(oAuth2AuthenticationFailureHandler);
  }

}
