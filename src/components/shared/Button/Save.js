import { IoSaveOutline } from 'react-icons/io5';
import styles from './Button.module.css';
import cx from 'classnames';

export const Save = ({ disabled, hidden, onClick }) => {

    return (
        <div className={cx(styles.CustomButton)}>
            <button
                title='Guardar'
                hidden={hidden}
                disabled={disabled}
                onClick={onClick}
                className={cx(styles.saveButton, 'ms-2')}><IoSaveOutline size="18" /></button>
        </div>
    )
}