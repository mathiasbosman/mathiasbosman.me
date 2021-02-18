package be.mathiasbosman.cv.config;

import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ControllerConfig {

  public static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

  @Bean
  public JsonMapper jsonMapper() {
    SimpleModule module =
        new JavaTimeModule()
            .addSerializer(LocalDate.class, new LocalDateSerializer(DATE_FORMATTER))
            .addDeserializer(LocalDate.class, new LocalDateDeserializer(DATE_FORMATTER));
    return JsonMapper.builder().addModule(module).build();
  }
}
