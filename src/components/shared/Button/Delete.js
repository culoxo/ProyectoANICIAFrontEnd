import { RiDeleteBinLine } from 'react-icons/ri';
import styles from './Button.module.css';
import cx from 'classnames';

export const Delete = ({ disabled, hidden, onClick }) => {

    return (
        <div className={cx(styles.CustomButton)}>
            <button
                title='Borrar'
                hidden={hidden}
                disabled={disabled}
                onClick={onClick}
                className={cx(styles.deleteButton, 'ms-2')}><RiDeleteBinLine size="22" /></button>
        </div>
    )
}