import { MdOutlineModeEdit } from 'react-icons/md';
import styles from './Button.module.css';
import cx from 'classnames';

export const Edit = ({ disabled, hidden, onClick }) => {

    return (
        <div className={cx(styles.CustomButton)}>
            <button
                title='Editar'
                disabled={disabled}
                hidden={hidden}
                className={cx(styles.editButton, 'ms-2')}
                onClick={onClick}><MdOutlineModeEdit size="18" /></button>
        </div>
    )
}