package be.mathiasbosman.cv.api;

import be.mathiasbosman.cv.config.ControllerConfig;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.SerializationConfig;
import com.fasterxml.jackson.databind.json.JsonMapper;
import org.junit.jupiter.api.Test;

public abstract class AbstractJsonMapperTest {

  @Test
  abstract void serializeDeserializeTest() throws JsonProcessingException;

  protected JsonMapper jsonMapper() {
    ControllerConfig controllerConfig = new ControllerConfig();
    JsonMapper jsonMapper = controllerConfig.jsonMapper();
    final SerializationConfig serializationConfig = jsonMapper.getSerializationConfig().with(
        MapperFeature.SORT_PROPERTIES_ALPHABETICALLY, true);
    jsonMapper.setConfig(serializationConfig);
    return jsonMapper;
  }
}
