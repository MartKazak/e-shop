//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

import "./modal.css"

type Props = {
    title: string;
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

const Modal: React.FC<Props> = ({ children, title, isOpen, onCancel, onConfirm }) => {
    if (!isOpen)
        return null;

    return (
        <div className="simple-modal-dialog">
            <div className="simple-modal-window">
                <div className="simple-modal-title">
                    <span className="simple-modal-title-text">{title}</span>
                    <span className="simple-modal-close" onClick={() => onCancel()}>&times;</span>
                </div>
                <div className="simple-modal-content">
                   {children}
                </div>
                <div className="simple-modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => onConfirm()}>OK</button>
                    <button type="button" className="btn btn-default" onClick={() => onCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;