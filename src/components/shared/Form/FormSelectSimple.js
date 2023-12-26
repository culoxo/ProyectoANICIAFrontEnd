import Select from "react-select"
import { FormFeedback, FormText, Label } from "reactstrap";


const FormSelectSimple = ({ messageError, key, register, message, isMulti, id, optionLabel, optionValue, labelCustomClass, action, label, options, defaultValue, value, disabled, onChange, placeholder, isClearable, error, touched, control, name }) => {

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            zIndex: 999
        }),
        groupHeading: (provided, state) => ({
            ...provided,
            paddingBottom: "10px"
        }),
        option: (provided, state) => ({
            ...provided,
            paddingTop: '0.25rem',
            paddingRight: '0.75rem',
            paddingBottom: '0.25rem',
            paddingLeft: '1.5rem',
            border: 'none',
            color: '#212529',
            fontSize: '1rem',
            backgroundColor: state.isFocused ? "#E6E6E6" : "transparent",
            cursor: "pointer",
            '&:hover': {
                backgroundColor: "#E6E6E6",
                cursor: "pointer"
            }
        }),
        clearIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? messageError ? "#dc3545" : "#c8c8c8" : messageError ? "#dc3545" : "#c8c8c8",
            cursor: "pointer",
            '&:hover': {
                color: state.isFocused ? messageError ? "#dc3545" : "#c8c8c8" : messageError ? "#dc3545" : "#c8c8c8",
                cursor: "pointer"
            }
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? messageError ? "#dc3545" : "#c8c8c8" : messageError ? "#dc3545" : "#c8c8c8",
            cursor: "pointer",
            '&:hover': {
                color: state.isFocused ? messageError ? "#dc3545" : "#c8c8c8" : messageError ? "#dc3545" : "#c8c8c8",
                cursor: "pointer"
            }
        }),
        control: (base, state) => ({
            ...base,
            boxShadow: state.isFocused ? messageError ? "0 0 0 0.25rem rgb(220 53 69 / 25%)" : "0 0 0 0.2rem rgb(206 212 218 / 25%)" : "none",
            border: messageError ? "1px solid #dc3545" : "1px solid #ced4da",
            '&:hover': {
                boxShadow: state.isFocused ? messageError ? "0 0 0 0.25rem rgb(220 53 69 / 25%)" : "0 0 0 0.2rem rgb(206 212 218 / 25%)" : "none",
            },
            borderRadius: "0.25rem",
            minHeight: "calc(3.5rem + 2px)",
            boxSizing: "border-box",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition, fontSize: '1rem', marginTop: '20px', marginLeft: '4px' };
        },
        input: (provided, state) => {
            return { ...provided, fontSize: '1rem', marginTop: '20px', marginLeft: '4px' };
        },
        indicatorSeparator: base => ({
            ...base
        }),
        valueContainer: (styles, { data }) => ({
            ...styles,
            flexWrap: 'nowrap'
        }),
        multiValue: (styles, { data }) => ({
            ...styles,
            fontSize: '0.9rem',
            marginTop: '23px'
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: 'rgba(227, 24, 25, 0.9)',
            ':hover': {
                backgroundColor: 'rgba(227, 24, 25, 0.3)',
                color: 'rgba(227, 24, 25, 0.9)',
            },
        }),
        placeholder: (provided, state) => ({
            ...provided,
            marginTop: '20px',
            marginLeft: '3px',
            fontSize: '1rem'
        })
    };

    return (
        <div className="form-floating">
            <Select
                isMulti={isMulti}
                id={id}
                name={id}
                key={key}
                options={options}
                getOptionLabel={optionLabel}
                getOptionValue={optionValue}
                isLoading={false}
                classNamePrefix="select"
                defaultValue={defaultValue}
                isDisabled={disabled}
                className={error && touched ? "basic-multi-select custom-input-error" : "basic-multi-select"}
                onChange={(value) => {
                    if (action) {
                        action(value);
                    }
                    onChange(value)
                }
                }
                placeholder={placeholder}
                styles={customStyles}
                noOptionsMessage={() => "No se han encontrado resultados"}
                isClearable={isClearable}
            />


            <Label className='select-label' for={id}>{label}</Label>
            <FormFeedback className={messageError ? 'show-feedback' : ''}>
                {messageError}
            </FormFeedback>
            <FormText>{message}</FormText>
        </div>
    );
}

export default FormSelectSimple;