// import { FunctionComponent } from "react";
import "./modal.css"

type Props = {
    children: any;
    title: string;
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function Modal({children, title, isOpen, onCancel, onConfirm}: Props) {
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

//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6