import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function InputType({ typeInput }) {
  // console.log(typeInput);

  if (typeInput.type === "option") {
    return (
      <>
        <Form.Label>{typeInput.label}</Form.Label>
        <Form.Select
          onChange={typeInput.fnMethod}
          name={typeInput.key}
          defaultValue={typeInput.defaultVal}
          disabled={typeInput.disabled}
        >
          <option value="" className="form-select option-bg-success" disabled>
            Pilih Tipe Driver
          </option>
          <option
            className="form-select option-bg-success"
            value="Dengan Supir"
          >
            Dengan Supir
          </option>
          <option className="form-select option-bg-success" value="Lepas Kunci">
            Tanpa Supir (Lepas Kunci)
          </option>
        </Form.Select>
      </>
    );
  } else if (
    typeInput.type === "date" ||
    typeInput.type === "time" ||
    typeInput.type === "text" ||
    typeInput.type === "number"
  ) {
    return (
      <>
        <Form.Label>{typeInput.label}</Form.Label>
        <Form.Control
          disabled={typeInput.disabled}
          defaultValue={typeInput.defaultVal}
          onInput={typeInput.fnMethod}
          name={typeInput.key}
          type={typeInput.type}
        />
      </>
    );
  } else {
    return (
      <button
        disabled={typeInput.disabled}
        id="btn-search"
        type={typeInput.type}
        className="btn btn-success w-100"
        onClick={typeInput.fnMethod}
      >
        {typeInput.label}
      </button>
    );
  }
}

function CustomInput({ typeInput }) {
  return <InputType typeInput={typeInput} />;
}

CustomInput.propTypes = {
  typeInput: PropTypes.object.isRequired,
};
InputType.propTypes = {
  typeInput: PropTypes.object.isRequired,
};

export default CustomInput;
