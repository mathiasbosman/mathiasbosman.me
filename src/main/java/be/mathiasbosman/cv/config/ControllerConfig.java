package be.mathiasbosman.cv.config;

import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ControllerConfig {

  @Bean
  public JsonMapper jsonMapper() {
    SimpleModule module =
        new JavaTimeModule()
            .addSerializer(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ISO_DATE))
            .addDeserializer(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ISO_DATE))
            .addSerializer(LocalDateTime.class,
                new LocalDateTimeSerializer(DateTimeFormatter.ISO_DATE_TIME))
            .addDeserializer(LocalDateTime.class,
                new LocalDateTimeDeserializer(DateTimeFormatter.ISO_DATE_TIME));
    return JsonMapper.builder().addModule(module).build();
  }
}
