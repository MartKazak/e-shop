// import { FunctionComponent } from "react";
import "./modal.css"

type Props = {
    children: any;
    isOpen: boolean;
};

export default function Modal({children, isOpen}: Props) {
    const onCancel = () => {
        isOpen = false;
    };

    return (
        <div>
            <div>{children}</div>
            <div className="simple-modal-footer">
                <button type="button" className="btn btn-primary">OK</button>
                <button type="button" className="btn btn-default" onClick={() => onCancel()}>Cancel</button>
            </div>
        </div>
    );
}

//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
// type Props = {
//     title: string;
//     isOpen: boolean;
//     children: any;
// };

// export default function Modal({children, title,  isOpen}: Props) {
//     return (
//         <dialog className="simple-modal-dialog" open={false}>
//             <div className="simple-modal-window">
//                 <div className="simple-modal-title">
//                     <span className="simple-modal-title-text">
//                         {title}
//                     </span>
//                     <span className="simple-modal-close">
//                         &times;
//                     </span>
//                 </div>
//                 <div className="simple-modal-content">
//                     {children}
//                 </div>
//                 <div className="simple-modal-footer">
//                     <button type="button" className="btn btn-primary">OK</button>
//                     <button type="button" className="btn btn-default">Cancel</button>
//                 </div>
//             </div>
//         </dialog>
//     );
// }