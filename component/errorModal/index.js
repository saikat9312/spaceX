import styles from '../../styles/ErrorModal.module.css'

const ErrorModal = (props) => {
    return (
        <div id="id01" class="w3-modal">
            <div class="w3-modal-content">
                <div class="w3-container">
                    <span onclick="document.getElementById('id01').style.display='none'"
                        class="w3-button w3-display-topright">&times;</span>
                    <p>Some text in the Modal..</p>
                    <p>Some text in the Modal..</p>
                    <p>{props.error}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal